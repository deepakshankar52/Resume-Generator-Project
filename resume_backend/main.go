// Rendering the resume template - success

package main

import (
    "fmt"
    "io/ioutil"
    "net/http"																			
    "github.com/gorilla/handlers"
)

func getTemplate(w http.ResponseWriter, r *http.Request) {
    resumeHTML, err := ioutil.ReadFile("templates/org_index.html")
    if err != nil {
        http.Error(w, "Failed to read resume file", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "text/html")
    w.Write(resumeHTML)
}

func main() {
    // Initialize CORS options
    allowedHeaders := handlers.AllowedHeaders([]string{"Content-Type"})
    allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
    allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:3000"})

    // Define HTTP handler for /api/resume endpoint
    http.HandleFunc("/api/resume", getTemplate)

    // Setup CORS middleware with the initialized options
    corsHandler := handlers.CORS(allowedHeaders, allowedMethods, allowedOrigins)

    // Start HTTP server with CORS middleware
    fmt.Println("Server started on port 8080")
    http.ListenAndServe(":8080", corsHandler(http.DefaultServeMux))
}


// package main

// import (
//     "fmt"
//     "io/ioutil"
//     "net/http"
//     "github.com/gorilla/handlers"
// )

// func getTemplate(w http.ResponseWriter, r *http.Request) {
//     resumeHTML, err := ioutil.ReadFile("templates/index.html")
//     if err != nil {
//         http.Error(w, "Failed to read resume file", http.StatusInternalServerError)
//         return
//     }

//     w.Header().Set("Content-Type", "text/html")
//     w.Write(resumeHTML)
// }

// func main() {
//     // Initialize CORS options
//     allowedHeaders := handlers.AllowedHeaders([]string{"Content-Type"})
//     allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
//     allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:3000"})

//     // Define HTTP handler for /api/resume endpoint
//     http.HandleFunc("/api/resume", getTemplate)

//     // Setup CORS middleware with the initialized options
//     corsHandler := handlers.CORS(allowedHeaders, allowedMethods, allowedOrigins)

//     // Start HTTP server with CORS middleware
//     fmt.Println("Server started on port 8080")
//     http.ListenAndServe(":8080", corsHandler(http.DefaultServeMux))
// }
