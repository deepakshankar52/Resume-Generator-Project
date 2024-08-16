// Rendering the resume template - success

// import React from 'react';
// import resume_template_1 from './images/resume_template_1.png';

// const Templates = () => {
//   const handleResumeClick = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/resume'); // Fetching resume from backend
//       const resumeHtml = await response.text();
//       const newWindow = window.open(); // Open a new window to display resume
//       newWindow.document.body.innerHTML = resumeHtml;
//     } catch (error) {
//       console.error('Error fetching resume:', error); 
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   return (
//     <div>
//       <h2>Click the image to view resume</h2>
//       <img src={resume_template_1} alt="Resume" onClick={handleResumeClick} />
//     </div>
//   );
// };

// export default Templates;


// The html content was editable and dragable but page layout is shrinking - need improvement

// import React from 'react';
// import resume_template_1 from './images/resume_template_1.png';

// const ResumeComponent = () => {
//   const handleResumeClick = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/resume'); // Fetching resume from backend
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const resumeHtml = await response.text();
//       const newWindow = window.open(); // Open a new window to display resume
//       newWindow.document.write(resumeHtml);

//       // Enable editing and dragging in the new window
//       enableEditingAndDragging(newWindow);
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   // Function to enable editing and dragging in the new window
//   const enableEditingAndDragging = (newWindow) => {
//     newWindow.document.addEventListener('dblclick', (event) => {
//       if (event.target.matches('.container *')) {
//         event.target.contentEditable = true;
//       }
//     });

//     newWindow.document.addEventListener('mousedown', (event) => {
//       if (event.target.matches('.container *')) {
//         const elem = event.target;
//         elem.style.position = 'absolute';
//         const offsetX = event.clientX - elem.getBoundingClientRect().left;
//         const offsetY = event.clientY - elem.getBoundingClientRect().top;

//         const mouseMoveHandler = (moveEvent) => {
//           elem.style.left = `${moveEvent.clientX - offsetX}px`;
//           elem.style.top = `${moveEvent.clientY - offsetY}px`;
//         };

//         const mouseUpHandler = () => {
//           newWindow.document.removeEventListener('mousemove', mouseMoveHandler);
//           newWindow.document.removeEventListener('mouseup', mouseUpHandler);
//         };

//         newWindow.document.addEventListener('mousemove', mouseMoveHandler);
//         newWindow.document.addEventListener('mouseup', mouseUpHandler);
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Click the image to view resume</h2>
//       <img src={resume_template_1} alt="Resume" onClick={handleResumeClick} />
//     </div>
//   );
// };

// export default ResumeComponent;


// Need more improvement from previous step

// import React from 'react';
// import resume_template_1 from './images/resume_template_1.png';

// const ResumeComponent = () => {
//   const handleResumeClick = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/resume'); // Correct the URL scheme to http
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const resumeHtml = await response.text();
//       const newWindow = window.open(); // Open a new window to display resume
//       newWindow.document.write(resumeHtml);

//       // Enable editing and dragging in the new window
//       enableEditingAndDragging(newWindow);
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   // Function to enable editing and dragging in the new window
//   const enableEditingAndDragging = (newWindow) => {
//     newWindow.document.addEventListener('dblclick', (event) => {
//       if (event.target.matches('.container *')) {
//         event.target.contentEditable = true;
//       }
//     });

//     newWindow.document.addEventListener('mousedown', (event) => {
//       if (event.target.matches('.container *')) {
//         const elem = event.target;
//         elem.style.position = 'absolute';
//         elem.style.zIndex = 1000; // Ensure element stays on top when dragged
//         const offsetX = event.clientX - elem.getBoundingClientRect().left;
//         const offsetY = event.clientY - elem.getBoundingClientRect().top;

//         const mouseMoveHandler = (moveEvent) => {
//           elem.style.left = `${moveEvent.clientX - offsetX}px`;
//           elem.style.top = `${moveEvent.clientY - offsetY}px`;
//         };

//         const mouseUpHandler = () => {
//           newWindow.document.removeEventListener('mousemove', mouseMoveHandler);
//           newWindow.document.removeEventListener('mouseup', mouseUpHandler);
//         };

//         newWindow.document.addEventListener('mousemove', mouseMoveHandler);
//         newWindow.document.addEventListener('mouseup', mouseUpHandler);
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Click the image to view resume</h2>
//       <img src={resume_template_1} alt="Resume" onClick={handleResumeClick} />
//     </div>
//   );
// };

// export default ResumeComponent;


// left and top side was default when the element is selected

// import React from 'react';
// import resume_template_1 from './images/resume_template_1.png';

// const ResumeComponent = () => {
//   const handleResumeClick = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/resume'); // Correct the URL scheme to http
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const resumeHtml = await response.text();
//       const newWindow = window.open(); // Open a new window to display resume
//       newWindow.document.write(resumeHtml);

//       // Enable editing and dragging in the new window
//       enableEditingAndDragging(newWindow);
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   // Function to enable editing and dragging in the new window
//   const enableEditingAndDragging = (newWindow) => {
//     const style = newWindow.document.createElement('style');
//     style.innerHTML = `
//       .container {
//         position: relative;
//         width: 800px; /* Set a fixed width for the container */
//         height: 1000px; /* Set a fixed height for the container */
//         border: 1px solid #000; /* Optional: Add a border to see the container outline */
//         overflow: hidden; /* Ensure content doesn't overflow the container */
//       }
//       .container .header h1, .container .header p {
//         margin: 0; /* Remove default margins */
//       }
//       .draggable {
//         position: absolute; /* Ensure all elements are positioned absolutely */
//       }
//     `;
//     newWindow.document.head.appendChild(style);

//     newWindow.document.addEventListener('dblclick', (event) => {
//       if (event.target.matches('.container *')) {
//         event.target.contentEditable = true;
//         event.target.classList.add('draggable');
//       }
//     });

//     newWindow.document.addEventListener('mousedown', (event) => {
//       if (event.target.matches('.draggable')) {
//         const elem = event.target;
//         const container = newWindow.document.querySelector('.container');
//         const offsetX = event.clientX - elem.getBoundingClientRect().left;
//         const offsetY = event.clientY - elem.getBoundingClientRect().top;

//         const mouseMoveHandler = (moveEvent) => {
//           let newLeft = moveEvent.clientX - offsetX;
//           let newTop = moveEvent.clientY - offsetY;

//           // Constrain within container
//           newLeft = Math.max(0, Math.min(newLeft, container.clientWidth - elem.offsetWidth));
//           newTop = Math.max(0, Math.min(newTop, container.clientHeight - elem.offsetHeight));

//           elem.style.left = `${newLeft}px`;
//           elem.style.top = `${newTop}px`;
//         };

//         const mouseUpHandler = () => {
//           newWindow.document.removeEventListener('mousemove', mouseMoveHandler);
//           newWindow.document.removeEventListener('mouseup', mouseUpHandler);
//         };

//         newWindow.document.addEventListener('mousemove', mouseMoveHandler);
//         newWindow.document.addEventListener('mouseup', mouseUpHandler);
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Click the image to view resume</h2>
//       <img src={resume_template_1} alt="Resume" onClick={handleResumeClick} />
//     </div>
//   );
// };

// export default ResumeComponent;


// This code is okay that the elements are editable and dragable - one bug (elements moving to top)

// import React from 'react';
// import resume_template_1 from './images/resume_template_1.png';

// const ResumeComponent = () => {
//   const handleResumeClick = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/resume'); // Correct the URL scheme to http
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const resumeHtml = await response.text();
//       const newWindow = window.open(); // Open a new window to display resume
//       newWindow.document.write(resumeHtml);

//       // Enable editing and dragging in the new window
//       enableEditingAndDragging(newWindow);
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       // Handle error (e.g., show a message to the user)
//     }
//   };

//   // Function to enable editing and dragging in the new window
//   const enableEditingAndDragging = (newWindow) => {
//     const style = newWindow.document.createElement('style');
//     style.innerHTML = `
//       .container {
//         position: relative;
//         width: 800px; /* Set a fixed width for the container */
//         height: 1000px; /* Set a fixed height for the container */
//         border: 1px solid #000; /* Optional: Add a border to see the container outline */
//         overflow: hidden; /* Ensure content doesn't overflow the container */
//       }
//       .container .header h1, .container .header p {
//         margin: 0; /* Remove default margins */
//       }
//       .editable {
//         cursor: move; /* Change cursor to indicate the element can be moved */
//       }
//     `;
//     newWindow.document.head.appendChild(style);

//     newWindow.document.addEventListener('dblclick', (event) => {
//       if (event.target.matches('.container *')) {
//         event.target.contentEditable = true;
//         event.target.classList.add('editable');
//       }
//     });

//     newWindow.document.addEventListener('mousedown', (event) => {
//       if (event.target.matches('.editable')) {
//         const elem = event.target;
//         const container = newWindow.document.querySelector('.container');
//         const initialX = elem.getBoundingClientRect().left;
//         const initialY = elem.getBoundingClientRect().top;
//         const offsetX = event.clientX - initialX;
//         const offsetY = event.clientY - initialY;

//         elem.style.position = 'absolute';
//         elem.style.left = `${initialX - container.getBoundingClientRect().left}px`;
//         elem.style.top = `${initialY - container.getBoundingClientRect().top}px`;
//         elem.style.zIndex = 1000; // Ensure element stays on top when dragged

//         const mouseMoveHandler = (moveEvent) => {
//           let newLeft = moveEvent.clientX - offsetX;
//           let newTop = moveEvent.clientY - offsetY;

//           // Constrain within container
//           newLeft = Math.max(0, Math.min(newLeft, container.clientWidth - elem.offsetWidth));
//           newTop = Math.max(0, Math.min(newTop, container.clientHeight - elem.offsetHeight));

//           elem.style.left = `${newLeft}px`;
//           elem.style.top = `${newTop}px`;
//         };

//         const mouseUpHandler = () => {
//           newWindow.document.removeEventListener('mousemove', mouseMoveHandler);
//           newWindow.document.removeEventListener('mouseup', mouseUpHandler);
//         };

//         newWindow.document.addEventListener('mousemove', mouseMoveHandler);
//         newWindow.document.addEventListener('mouseup', mouseUpHandler);
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Click the image to view resume</h2>
//       <img src={resume_template_1} alt="Resume" onClick={handleResumeClick} />
//     </div>
//   );
// };

// export default ResumeComponent;

import React from 'react';
import resume_template_1 from './images/resume_template_1.png';

const ResumeComponent = () => {
  const handleResumeClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/resume'); // Correct the URL scheme to http
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resumeHtml = await response.text();
      const newWindow = window.open(); // Open a new window to display resume
      newWindow.document.write(resumeHtml);

      // Add download button
      const downloadButton = newWindow.document.createElement('button');
      downloadButton.innerText = 'Download Edited Resume';
      downloadButton.style.position = 'fixed';
      downloadButton.style.top = '10px';
      downloadButton.style.right = '10px';
      downloadButton.onclick = () => downloadEditedResume(newWindow);
      newWindow.document.body.appendChild(downloadButton);

      // Enable editing and dragging in the new window
      enableEditingAndDragging(newWindow);
    } catch (error) {
      console.error('Error fetching resume:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

  // Function to enable editing and dragging in the new window
  const enableEditingAndDragging = (newWindow) => {
    const style = newWindow.document.createElement('style');
    style.innerHTML = `
      .container {
        position: relative;
        width: 800px; 
        height: 1000px;
        border: 1px solid #000; 
        overflow: hidden; /* Ensure content doesn't overflow the container */
      }
      .container .header h1, .container .header p {
        margin: 0; /* Remove default margins */
      }
      .editable {
        cursor: move; /* Change cursor to indicate the element can be moved */
      }
    `;
    newWindow.document.head.appendChild(style);

    newWindow.document.addEventListener('dblclick', (event) => {
      if (event.target.matches('.container *')) {
        event.target.contentEditable = true;
        event.target.classList.add('editable');
      }
    });

    newWindow.document.addEventListener('mousedown', (event) => {
      if (event.target.matches('.editable')) {
        const elem = event.target;
        const container = newWindow.document.querySelector('.container');
        const initialX = elem.getBoundingClientRect().left;
        const initialY = elem.getBoundingClientRect().top;
        const offsetX = event.clientX - initialX;
        const offsetY = event.clientY - initialY;

        elem.style.position = 'absolute';
        elem.style.left = `${initialX - container.getBoundingClientRect().left}px`;
        elem.style.top = `${initialY - container.getBoundingClientRect().top}px`;
        elem.style.zIndex = 1000; // Ensure element stays on top when dragged

        const mouseMoveHandler = (moveEvent) => {
          let newLeft = moveEvent.clientX - offsetX;
          let newTop = moveEvent.clientY - offsetY;

          // Constrain within container
          newLeft = Math.max(0, Math.min(newLeft, container.clientWidth - elem.offsetWidth));
          newTop = Math.max(0, Math.min(newTop, container.clientHeight - elem.offsetHeight));

          elem.style.left = `${newLeft}px`;
          elem.style.top = `${newTop}px`;
        };

        const mouseUpHandler = () => {
          newWindow.document.removeEventListener('mousemove', mouseMoveHandler);
          newWindow.document.removeEventListener('mouseup', mouseUpHandler);
        };

        newWindow.document.addEventListener('mousemove', mouseMoveHandler);
        newWindow.document.addEventListener('mouseup', mouseUpHandler);
      }
    });
  };

  // Function to download the edited resume
  const downloadEditedResume = (newWindow) => {
    const blob = new Blob([newWindow.document.documentElement.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited_resume.html';
    a.click();
    URL.revokeObjectURL(url);
      
  };

  return (
    <div>
      <h2>Click the image to view resume</h2>
      <img src={resume_template_1} alt="Resume" onClick={handleResumeClick} />
    </div>
  );
};

export default ResumeComponent;

