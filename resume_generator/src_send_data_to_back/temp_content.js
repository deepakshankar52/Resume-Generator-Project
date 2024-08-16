// src/UserForm.js
import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = { name, email, phoneNumber };

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Generate Resume</button>
        </form>
    );
  };

export default UserForm;
