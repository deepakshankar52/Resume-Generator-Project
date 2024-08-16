// main.go
package main

import (
    "encoding/json"
    "fmt"
    "html/template"
    "io/ioutil"
    "net/http"
    "os"
    "os/exec"
    "bytes"
)

type WorkExperience struct {
    PositionTitle      string `json:"positionTitle"`
    CompanyName        string `json:"companyName"`
    City               string `json:"city"`
    State              string `json:"state"`
    StartDate          string `json:"startDate"`
    EndDate            string `json:"endDate"`
    CurrentlyEmployed  bool   `json:"currentlyEmployed"`
    WorkSummary        string `json:"workSummary"`
}

type ResumeData struct {
    Experiences []WorkExperience `json:"experiences"`
}

func generateResumeHandler(w http.ResponseWriter, r *http.Request) {
    var data ResumeData

    body, err := ioutil.ReadAll(r.Body)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    err = json.Unmarshal(body, &data)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    resumeFile, err := generateResume(data)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Disposition", "attachment; filename=resume.pdf")
    w.Header().Set("Content-Type", "application/pdf")
    http.ServeFile(w, r, resumeFile)
}

func generateResume(data ResumeData) (string, error) {
    tmpl, err := template.ParseFiles("template.html")
    if err != nil {
        return "", err
    }

    var filledTemplate bytes.Buffer
    err = tmpl.Execute(&filledTemplate, data)
    if err != nil {
        return "", err
    }

    htmlFileName := "resume.html"
    err = os.WriteFile(htmlFileName, filledTemplate.Bytes(), 0644)
    if err != nil {
        return "", err
    }

    pdfFileName := "resume.pdf"
    cmd := exec.Command("wkhtmltopdf", htmlFileName, pdfFileName)
    err = cmd.Run()
    if err != nil {
        return "", err
    }

    return pdfFileName, nil
}

func main() {
    http.HandleFunc("/generate-resume", generateResumeHandler)
    fmt.Println("Server started at :8080")
    http.ListenAndServe(":8080", nil)
}
