package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
	"bytes"
    "html/template"
    "os"
	"os/exec"
)

type ResumeData struct {
    Name        string `json:"name"`
    Email       string `json:"email"`
    PhoneNumber string `json:"phone_number"`
    // Add other fields as needed
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

    // Generate the resume with the received data
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

    // Save filled template to a temporary HTML file
    htmlFileName := "resume.html"
    err = os.WriteFile(htmlFileName, filledTemplate.Bytes(), 0644)
    if err != nil {
        return "", err
    }

    // Convert HTML to PDF using wkhtmltopdf
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