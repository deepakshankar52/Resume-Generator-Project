package main

import (
	"net/http"
	"fmt"
	"log"
	// "io/ioutil"
	"encoding/json"
)

type Data struct {
	studentName string `json:"student_name"`
}

func dataUpload(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Data Upload Endpoint Hit")
	var data Data 
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return 
	}
	w.Write([]byte(`{"mesaage": "Data received successfully"}`))
}

func main() {
	http.HandleFunc("/upload", dataUpload)

	fmt.Println("Starting on port: 8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}


