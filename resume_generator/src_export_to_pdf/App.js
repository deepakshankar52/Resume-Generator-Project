// Rendering the selected template

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [template, setTemplate] = useState(null);

//   const fetchTemplate = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/templates/${id}`);
//       setTemplate(response.data.content);
//     } catch (error) {
//       console.error('Error fetching the template', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Resume Templates</h1>
//       <div className="template-selector">
//         <button onClick={() => fetchTemplate('1')}>Load Template 1</button>
//         <button onClick={() => fetchTemplate('2')}>Load Template 2</button>
//       </div>
//       {template && (
//         <div
//           className="template-display"
//           dangerouslySetInnerHTML={{ __html: template }}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default App;


// Editable in real-time 

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [template, setTemplate] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [templateContent, setTemplateContent] = useState("");

//   const fetchTemplate = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/templates/${id}`);
//       setTemplate(response.data);
//       setTemplateContent(response.data.content);
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error fetching the template', error);
//     }
//   };

//   const updateTemplate = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/templates/${id}`, {
//         id: template.id,
//         content: templateContent,
//       });
//       setTemplate(response.data);
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error updating the template', error);
//     }
//   };

//   const handleContentChange = (e) => {
//     setTemplateContent(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>Resume Templates</h1>
//       <div className="template-selector">
//         <button onClick={() => fetchTemplate('1')}>Load Template 1</button>
//         <button onClick={() => fetchTemplate('2')}>Load Template 2</button>
//       </div>
//       {template && (
//         <div>
//           {editMode ? (
//             <div>
//               <textarea
//                 value={templateContent}
//                 onChange={handleContentChange}
//                 rows="20"
//                 cols="80"
//               />
//               <br />
//               <button onClick={() => updateTemplate(template.id)}>Save</button>
//             </div>
//           ) : (
//             <div
//               className="template-display"
//               dangerouslySetInnerHTML={{ __html: template.content }}
//             ></div>
//           )}
//           <button onClick={() => setEditMode(!editMode)}>
//             {editMode ? "Cancel" : "Edit"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// Editing on real-time screen 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [template, setTemplate] = useState(null);

//   const fetchTemplate = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/templates/${id}`);
//       setTemplate(response.data);
//     } catch (error) {
//       console.error('Error fetching the template', error);
//     }
//   };

//   useEffect(() => {
//     fetchTemplate('1'); // Load template 1 by default
//   }, []);

//   const updateTemplateSection = async (section, content) => {
//     try {
//       await axios.put(`http://localhost:8080/templates/${template.id}/section`, {
//         id: template.id,
//         section: section,
//         content: content,
//       });
//     } catch (error) {
//       console.error('Error updating the template section', error);
//     }
//   };

//   const handleContentChange = (e) => {
//     const section = e.target.id;
//     const content = e.target.innerText;
//     updateTemplateSection(section, content);
//   };

//   return (
//     <div className="App">
//       <h1>Resume Templates</h1>
//       {template && (
//         <div
//           className="template-display"
//           dangerouslySetInnerHTML={{ __html: template.content }}
//           onBlur={handleContentChange}
//           contentEditable="true"
//         ></div>
//       )}
//     </div>
//   );
// }

// export default App;


// Updating and Exporting the updated resume as pdf

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [template, setTemplate] = useState(null);

//   const fetchTemplate = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/templates/${id}`);
//       setTemplate(response.data);
//     } catch (error) {
//       console.error('Error fetching the template', error);
//     }
//   };

//   useEffect(() => {
//     fetchTemplate('1'); // Load template 1 by default
//   }, []);

//   const updateTemplateSection = async (section, content) => {
//     try {
//       await axios.put(`http://localhost:8080/templates/${template.id}/section`, {
//         id: template.id,
//         section: section,
//         content: content,
//       });
//     } catch (error) {
//       console.error('Error updating the template section', error);
//     }
//   };

//   const handleContentChange = (e) => {
//     const section = e.target.id;
//     const content = e.target.innerText;
//     updateTemplateSection(section, content);
//   };

//   const exportPDF = () => {
//     window.open(`http://localhost:8080/templates/${template.id}/export`, '_blank');
//   };

//   return (
//     <div className="App">
//       <h1>Resume Templates</h1>
//       {template && (
//         <div>
//           <div
//             className="template-display"
//             dangerouslySetInnerHTML={{ __html: template.content }}
//             onBlur={handleContentChange}
//             contentEditable="true"
//           ></div>
//           <button onClick={exportPDF}>Export to PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// Updated Exported function

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetchTemplate('1'); // Load template 1 by default
  }, []);

  const fetchTemplate = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/templates/${id}`);
      setTemplate(response.data);
    } catch (error) {
      console.error('Error fetching the template', error);
    }
  };

  const updateTemplateSection = async (section, content) => {
    try {
      await axios.put(`http://localhost:8080/templates/${template.id}/section`, {
        id: template.id,
        section: section,
        content: content,
      });
    } catch (error) {
      console.error('Error updating the template section', error);
    }
  };

  const handleContentChange = (e) => {
    const section = e.target.id;
    const content = e.target.innerText;
    updateTemplateSection(section, content);
  };

  const exportPDF = async () => {
    try {
      const updatedContent = document.querySelector('.template-display').innerHTML;
      const response = await axios.get(`http://localhost:8080/templates/${template.id}/export`, {
        params: {
          updated_content: updatedContent,
        },
        responseType: 'blob', // Important
      });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Error exporting PDF', error);
    }
  };

  return (
    <div className="App">
      <h1>Resume Template Editor</h1>
      {template && (
        <div>
          <div
            className="template-display"
            dangerouslySetInnerHTML={{ __html: template.content }}
            onBlur={handleContentChange}
            contentEditable="true"
          ></div>
          <button onClick={exportPDF}>Export to PDF</button>
        </div>
      )}
    </div>
  );
}

export default App;
