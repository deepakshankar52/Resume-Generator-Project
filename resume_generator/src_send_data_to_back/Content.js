import React, { useState } from 'react';
// import MainForm from './MainForm';

const Content = () => { 
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const userData = { firstname, lastname, phonenumber, email, address, linkedin, github };

    const response = await fetch('http://localhost:8080/generate-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error('Error generating resume');
    }
  };

  return (
    <div className="Content">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="personal-info">
            <label>
              First Name:
              <input 
                type="text" 
                value={firstname} 
                onChange={(e) => setFirstName(e.target.value)} 
                required 
              />
            </label>
            <label>
              Last Name:
              <input 
                type="text" 
                value={lastname} 
                onChange={(e) => setLastName(e.target.value)} 
                required 
              />
            </label>
            <label>
              Phone Number:
              <input 
                type="text" 
                value={phonenumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                required 
              />
            </label>
            <label>
              Email Address:
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </label>
            <label>
              Address:
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </label>
            <label>
              LinkedIn ID:
              <input 
                type="text" 
                value={linkedin} 
                onChange={(e) => setLinkedin(e.target.value)} 
                required 
              />
            </label>
            <label>
              Github ID:
              <input 
                type="text" 
                value={github} 
                onChange={(e) => setGithub(e.target.value)} 
                required 
              />
            </label>
          </div>
{/* 
          <MainForm /> */}

        </form>
      </div>
    </div>
  );
          
};

export default Content;