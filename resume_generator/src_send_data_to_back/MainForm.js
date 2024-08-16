import React, { useState } from 'react';
import WorkExperienceForm from './WorkExperienceForm';

const MainForm = () => {
  const [experiences, setExperiences] = useState([{ 
    positionTitle: '', 
    companyName: '', 
    city: '', 
    state: '', 
    startDate: '', 
    endDate: '', 
    currentlyEmployed: false, 
    workSummary: '' 
  }]);

  const handleExperienceChange = (index, event) => {
    const values = [...experiences];
    if (event.target.name === "currentlyEmployed") {
      values[index][event.target.name] = event.target.checked;
    } else {
      values[index][event.target.name] = event.target.value;
    }
    setExperiences(values);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { 
      positionTitle: '', 
      companyName: '', 
      city: '', 
      state: '', 
      startDate: '', 
      endDate: '', 
      currentlyEmployed: false, 
      workSummary: '' 
    }]);
  };

  const handleRemoveExperience = (index) => {
    const values = [...experiences];
    values.splice(index, 1);
    setExperiences(values);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const userData = { experiences };

  //   const response = await fetch('http://localhost:8080/generate-resume', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userData),
  //   });

  //   if (response.ok) {
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = 'resume.pdf';
  //     document.body.appendChild(a);
  //     a.click();
  //     a.remove();
  //   } else {
  //     console.error('Error generating resume');
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    <form>
    {experiences.map((experience, index) => (
        <WorkExperienceForm
          key={index}
          index={index}
          experience={experience}
          handleExperienceChange={handleExperienceChange}
          handleRemoveExperience={handleRemoveExperience}
        />
      ))}
      <button type="button" onClick={handleAddExperience}>Add more work experience</button>
      {/* <button type="submit">Generate Resume</button> */}
    </form>
  );
};

export default MainForm;
