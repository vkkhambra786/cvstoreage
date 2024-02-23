 
import React, { useEffect, useState } from 'react';

const CV = () => {
  const [cvData, setCVData] = useState({
    personalInformation: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    education: '',
    workExperience: '',
    skills: '',
  });

  useEffect(() => {
    const storedCVData = JSON.parse(localStorage.getItem('cvData'));
    console.log('Stored CV Data:', storedCVData);
    if (storedCVData) {
      setCVData(storedCVData);
    }
  }, []);

  return (
    <div>
      <h1>CV</h1>
      <h2>Personal Information</h2>
      <p>First Name: {cvData.personalInformation?.firstName}</p> {/* Use optional chaining to prevent errors */}
      <p>Last Name: {cvData.personalInformation?.lastName}</p>
      <p>Email: {cvData.personalInformation?.email}</p>
      <p>Phone: {cvData.personalInformation?.phone}</p>
      <h2>Education</h2>
      <p>{cvData.education}</p>
      <h2>Work Experience</h2>
      <p>{cvData.workExperience}</p>
      <h2>Skills</h2>
      <p>{cvData.skills}</p>
    </div>
  );
};

export default CV;
