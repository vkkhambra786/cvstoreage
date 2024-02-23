import React, { useState } from 'react';
import jsPDF from 'jspdf';

function CVGenerator() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate PDF
    const doc = new jsPDF();
    doc.text(`Name: ${firstName} ${lastName}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Education: ${education}`, 10, 40);
    doc.text(`Experience: ${experience}`, 10, 50);
    doc.save('cv.pdf');
  };

  return (
    <div>
      <h1>CV Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>
        <br />
        <label>
          Education:
          <textarea value={education} onChange={handleEducationChange} />
        </label>
        <br />
        <label>
          Experience:
          <textarea value={experience} onChange={handleExperienceChange} />
        </label>
        <br />
        <button type="submit">Generate CV</button>
      </form>
    </div>
  );
}

export default CVGenerator;
