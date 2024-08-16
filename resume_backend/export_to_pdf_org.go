// Rendering the selected template

// package main

// import (
//     "github.com/gin-contrib/cors"
//     "github.com/gin-gonic/gin"
//     "net/http"
// )

// type Template struct {
//     ID      string `json:"id"`
//     Content string `json:"content"`
// }

// var templates = []Template{
//     {
//         ID: "1", 
//         Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 style="color: #4CAF50;">John Doe</h1>
//             <p>Email: john.doe@example.com</p>
//             <p>Phone: (555) 555-5555</p>
//             <h2 style="color: #4CAF50;">Experience</h2>
//             <h3>Software Engineer at ABC Corp</h3>
//             <p>Developed web applications using React and Node.js. Improved performance by 20%.</p>
//             <h3>Junior Developer at XYZ Inc</h3>
//             <p>Worked on front-end development using HTML, CSS, and JavaScript.</p>
//             <h2 style="color: #4CAF50;">Education</h2>
//             <h3>BS in Computer Science</h3>
//             <p>University of Somewhere, 2016-2020</p>
//         </div>
//         `,
//     },
//     {
//         ID: "2", 
//         Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 style="color: #2196F3;">Jane Smith</h1>
//             <p>Email: jane.smith@example.com</p>
//             <p>Phone: (555) 555-5556</p>
//             <h2 style="color: #2196F3;">Experience</h2>
//             <h3>Project Manager at Example Ltd</h3>
//             <p>Led a team of 10 in developing enterprise software solutions. Managed project timelines and budgets.</p>
//             <h3>Business Analyst at Sample Co</h3>
//             <p>Analyzed business processes and provided recommendations for improvements. Coordinated with stakeholders.</p>
//             <h2 style="color: #2196F3;">Education</h2>
//             <h3>MBA</h3>
//             <p>University of Anywhere, 2018-2020</p>
//         </div>
//         `,
//     },
// }

// func getTemplate(c *gin.Context) {
//     id := c.Param("id")
//     for _, template := range templates {
//         if template.ID == id {
//             c.JSON(http.StatusOK, template)
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func main() {
//     r := gin.Default()
//     r.Use(cors.Default())
//     r.GET("/templates/:id", getTemplate)
//     r.Run(":8080")
// }


// Editable in real-time

// package main

// import (
//     "github.com/gin-contrib/cors"
//     "github.com/gin-gonic/gin"
//     "net/http"
// )

// type Template struct {
//     ID      string `json:"id"`
//     Content string `json:"content"`
// }

// var templates = []Template{
//     {
//         ID: "1", 
//         Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 style="color: #4CAF50;">John Doe</h1>
//             <p>Email: john.doe@example.com</p>
//             <p>Phone: (555) 555-5555</p>
//             <h2 style="color: #4CAF50;">Experience</h2>
//             <h3>Software Engineer at ABC Corp</h3>
//             <p>Developed web applications using React and Node.js. Improved performance by 20%.</p>
//             <h3>Junior Developer at XYZ Inc</h3>
//             <p>Worked on front-end development using HTML, CSS, and JavaScript.</p>
//             <h2 style="color: #4CAF50;">Education</h2>
//             <h3>BS in Computer Science</h3>
//             <p>University of Somewhere, 2016-2020</p>
//         </div>
//         `,
//     },
//     {
//         ID: "2", 
//         Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 style="color: #2196F3;">Jane Smith</h1>
//             <p>Email: jane.smith@example.com</p>
//             <p>Phone: (555) 555-5556</p>
//             <h2 style="color: #2196F3;">Experience</h2>
//             <h3>Project Manager at Example Ltd</h3>
//             <p>Led a team of 10 in developing enterprise software solutions. Managed project timelines and budgets.</p>
//             <h3>Business Analyst at Sample Co</h3>
//             <p>Analyzed business processes and provided recommendations for improvements. Coordinated with stakeholders.</p>
//             <h2 style="color: #2196F3;">Education</h2>
//             <h3>MBA</h3>
//             <p>University of Anywhere, 2018-2020</p>
//         </div>
//         `,
//     },
// }

// func getTemplate(c *gin.Context) {
//     id := c.Param("id")
//     for _, template := range templates {
//         if template.ID == id {
//             c.JSON(http.StatusOK, template)
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateTemplate(c *gin.Context) {
//     var updatedTemplate Template
//     if err := c.ShouldBindJSON(&updatedTemplate); err != nil {
//         c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
//         return
//     }

//     for i, template := range templates {
//         if template.ID == updatedTemplate.ID {
//             templates[i].Content = updatedTemplate.Content
//             c.JSON(http.StatusOK, templates[i])
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func main() {
//     r := gin.Default()
//     r.Use(cors.Default())
//     r.GET("/templates/:id", getTemplate)
//     r.PUT("/templates/:id", updateTemplate)
//     r.Run(":8080")
// }


// Editing on real-time screen 

// package main

// import (
//     "github.com/gin-contrib/cors"
//     "github.com/gin-gonic/gin"
//     "net/http"
// )

// type Template struct {
//     ID      string `json:"id"`
//     Content string `json:"content"`
// }

// var templates = []Template{
//     {
//         ID: "1", 
//         Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 id="name" style="color: #4CAF50;" contenteditable="true">John Doe</h1>
//             <p id="email" contenteditable="true">Email: john.doe@example.com</p>
//             <p id="phone" contenteditable="true">Phone: (555) 555-5555</p>
//             <h2 style="color: #4CAF50;">Experience</h2>
//             <h3 id="job1" contenteditable="true">Software Engineer at ABC Corp</h3>
//             <p id="desc1" contenteditable="true">Developed web applications using React and Node.js. Improved performance by 20%.</p>
//             <h3 id="job2" contenteditable="true">Junior Developer at XYZ Inc</h3>
//             <p id="desc2" contenteditable="true">Worked on front-end development using HTML, CSS, and JavaScript.</p>
//             <h2 style="color: #4CAF50;">Education</h2>
//             <h3 id="education" contenteditable="true">BS in Computer Science</h3>
//             <p id="university" contenteditable="true">University of Somewhere, 2016-2020</p>
//         </div>
//         `,
//     },
// }

// func getTemplate(c *gin.Context) {
//     id := c.Param("id")
//     for _, template := range templates {
//         if template.ID == id {
//             c.JSON(http.StatusOK, template)
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateTemplateSection(c *gin.Context) {
//     var data struct {
//         ID      string `json:"id"`
//         Section string `json:"section"`
//         Content string `json:"content"`
//     }
//     if err := c.ShouldBindJSON(&data); err != nil {
//         c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
//         return
//     }

//     for i, template := range templates {
//         if template.ID == data.ID {
//             // Update the specific section in the template content
//             updatedContent := updateSectionContent(template.Content, data.Section, data.Content)
//             templates[i].Content = updatedContent
//             c.JSON(http.StatusOK, templates[i])
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateSectionContent(content, sectionID, newContent string) string {
//     // This function should parse the HTML content and replace the specific section content
//     // For simplicity, using string replacement here; in a real app, use a proper HTML parser
//     return content // This is a placeholder; implement proper parsing and updating logic
// }

// func main() {
//     r := gin.Default()
//     r.Use(cors.Default())
//     r.GET("/templates/:id", getTemplate)
//     r.PUT("/templates/:id/section", updateTemplateSection)
//     r.Run(":8080")
// }


// Updating and Exporting the updated resume as pdf

// package main

// import (
//     "github.com/gin-contrib/cors"
//     "github.com/gin-gonic/gin"
//     "github.com/jung-kurt/gofpdf"
//     "net/http"
//     "strings"
// )

// type Template struct {
//     ID      string `json:"id"`
//     Content string `json:"content"`
// }

// var templates = []Template{
//     {
//         ID: "1",
//         Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 id="name" style="color: #4CAF50;" contenteditable="true">John Doe</h1>
//             <p id="email" contenteditable="true">Email: john.doe@example.com</p>
//             <p id="phone" contenteditable="true">Phone: (555) 555-5555</p>
//             <h2 style="color: #4CAF50;">Experience</h2>
//             <h3 id="job1" contenteditable="true">Software Engineer at ABC Corp</h3>
//             <p id="desc1" contenteditable="true">Developed web applications using React and Node.js. Improved performance by 20%.</p>
//             <h3 id="job2" contenteditable="true">Junior Developer at XYZ Inc</h3>
//             <p id="desc2" contenteditable="true">Worked on front-end development using HTML, CSS, and JavaScript.</p>
//             <h2 style="color: #4CAF50;">Education</h2>
//             <h3 id="education" contenteditable="true">BS in Computer Science</h3>
//             <p id="university" contenteditable="true">University of Somewhere, 2016-2020</p>
//         </div>
//         `,
//     },
// }

// func getTemplate(c *gin.Context) {
//     id := c.Param("id")
//     for _, template := range templates {
//         if template.ID == id {
//             c.JSON(http.StatusOK, template)
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateTemplateSection(c *gin.Context) {
//     var data struct {
//         ID      string `json:"id"`
//         Section string `json:"section"`
//         Content string `json:"content"`
//     }
//     if err := c.ShouldBindJSON(&data); err != nil {
//         c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
//         return
//     }

//     for i, template := range templates {
//         if template.ID == data.ID {
//             // Update the specific section in the template content
//             updatedContent := updateSectionContent(template.Content, data.Section, data.Content)
//             templates[i].Content = updatedContent
//             c.JSON(http.StatusOK, templates[i])
//             return
//         }
//     }
//     c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateSectionContent(content, sectionID, newContent string) string {
//     // This function should parse the HTML content and replace the specific section content
//     // For simplicity, using string replacement here; in a real app, use a proper HTML parser
//     startTag := `<div id="` + sectionID + `"`
//     endTag := `</div>`
//     startIndex := strings.Index(content, startTag)
//     if startIndex == -1 {
//         return content
//     }
//     endIndex := strings.Index(content[startIndex:], endTag) + startIndex + len(endTag)
//     oldContent := content[startIndex:endIndex]
//     newContentDiv := `<div id="` + sectionID + `">` + newContent + `</div>`
//     return strings.Replace(content, oldContent, newContentDiv, 1)
// }

// func generatePDF(c *gin.Context) {
//     id := c.Param("id")
//     var templateContent string
//     for _, template := range templates {
//         if template.ID == id {
//             templateContent = template.Content
//             break
//         }
//     }
//     if templateContent == "" {
//         c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
//         return
//     }

//     pdf := gofpdf.New("P", "mm", "A4", "")
//     pdf.AddPage()
//     pdf.SetFont("Arial", "B", 16)

//     // Parse the HTML content and add it to the PDF
//     // This is a simplified example, a real application would need proper HTML parsing
//     lines := strings.Split(templateContent, "\n")
//     for _, line := range lines {
//         pdf.CellFormat(0, 10, strings.TrimSpace(line), "", 1, "L", false, 0, "")
//     }

//     c.Header("Content-Type", "application/pdf")
//     c.Header("Content-Disposition", `attachment; filename="resume.pdf"`)
//     err := pdf.Output(c.Writer)
//     if err != nil {
//         c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not generate PDF"})
//     }
// }

// func main() {
//     r := gin.Default()
//     r.Use(cors.Default())
//     r.GET("/templates/:id", getTemplate)
//     r.PUT("/templates/:id/section", updateTemplateSection)
//     r.GET("/templates/:id/export", generatePDF)
//     r.Run(":8080")
// }


// Updated Exported function

// package main

// import (
// 	"bytes"
// 	// "fmt"
// 	"github.com/gin-contrib/cors"
// 	"github.com/gin-gonic/gin"
// 	"github.com/jung-kurt/gofpdf"
// 	"net/http"
// 	"strings"
// )

// type Template struct {
// 	ID      string `json:"id"`
// 	Content string `json:"content"`
// }

// var templates = []Template{
// 	{
// 		ID: "1",
// 		Content: `
//         <div style="font-family: Arial, sans-serif; margin: 20px;">
//             <h1 id="name" style="color: #4CAF50;">John Doe</h1>
//             <p id="email">Email: john.doe@example.com</p>
//             <p id="phone">Phone: (555) 555-5555</p>
//             <h2 style="color: #4CAF50;">Experience</h2>
//             <h3 id="job1">Software Engineer at ABC Corp</h3>
//             <p id="desc1">Developed web applications using React and Node.js. Improved performance by 20%.</p>
//             <h3 id="job2">Junior Developer at XYZ Inc</h3>
//             <p id="desc2">Worked on front-end development using HTML, CSS, and JavaScript.</p>
//             <h2 style="color: #4CAF50;">Education</h2>
//             <h3 id="education">BS in Computer Science</h3>
//             <p id="university">University of Somewhere, 2016-2020</p>
//         </div>
//         `,
// 	},
// }

// func getTemplate(c *gin.Context) {
// 	id := c.Param("id")
// 	for _, template := range templates {
// 		if template.ID == id {
// 			c.JSON(http.StatusOK, template)
// 			return
// 		}
// 	}
// 	c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateTemplateSection(c *gin.Context) {
// 	var data struct {
// 		ID      string `json:"id"`
// 		Section string `json:"section"`
// 		Content string `json:"content"`
// 	}
// 	if err := c.ShouldBindJSON(&data); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	for i, template := range templates {
// 		if template.ID == data.ID {
// 			// Update the specific section in the template content
// 			updatedContent := updateSectionContent(template.Content, data.Section, data.Content)
// 			templates[i].Content = updatedContent
// 			c.JSON(http.StatusOK, templates[i])
// 			return
// 		}
// 	}
// 	c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// }

// func updateSectionContent(content, sectionID, newContent string) string {
// 	// This function should parse the HTML content and replace the specific section content
// 	// For simplicity, using string replacement here; in a real app, use a proper HTML parser
// 	startTag := `<div id="` + sectionID + `"`
// 	endTag := `</div>`
// 	startIndex := strings.Index(content, startTag)
// 	if startIndex == -1 {
// 		return content
// 	}
// 	endIndex := strings.Index(content[startIndex:], endTag) + startIndex + len(endTag)
// 	oldContent := content[startIndex:endIndex]
// 	newContentDiv := `<div id="` + sectionID + `">` + newContent + `</div>`
// 	return strings.Replace(content, oldContent, newContentDiv, 1)
// }

// func generatePDF(c *gin.Context) {
// 	id := c.Param("id")
// 	var templateContent string
// 	for _, template := range templates {
// 		if template.ID == id {
// 			templateContent = template.Content
// 			break
// 		}
// 	}
// 	if templateContent == "" {
// 		c.JSON(http.StatusNotFound, gin.H{"message": "Template not found"})
// 		return
// 	}

// 	// Generate PDF from updated content
// 	updatedContent := c.Query("updated_content")
// 	if updatedContent != "" {
// 		templateContent = updatedContent
// 	}

// 	// Create a new PDF document
// 	pdf := gofpdf.New("P", "mm", "A4", "")
// 	pdf.AddPage()
// 	pdf.SetFont("Arial", "B", 16)

// 	// Parse the updated HTML content and add it to the PDF
// 	// This is a simplified example, a real application would need proper HTML parsing
// 	lines := strings.Split(templateContent, "\n")
// 	for _, line := range lines {
// 		pdf.Cell(0, 10, line)
// 		pdf.Ln(-1)
// 	}

// 	// Generate PDF as bytes buffer
// 	var buf bytes.Buffer
// 	if err := pdf.Output(&buf); err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"message": "Could not generate PDF"})
// 		return
// 	}

// 	// Return the generated PDF to the client
// 	c.Header("Content-Type", "application/pdf")
// 	c.Header("Content-Disposition", `attachment; filename="resume.pdf"`)
// 	c.Data(http.StatusOK, "application/pdf", buf.Bytes())
// }

// func main() {
// 	r := gin.Default()
// 	r.Use(cors.Default())
// 	r.GET("/templates/:id", getTemplate)
// 	r.PUT("/templates/:id/section", updateTemplateSection)
// 	r.GET("/templates/:id/export", generatePDF)
// 	r.Run(":8080")
// }

package main
