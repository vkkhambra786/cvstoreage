 

import React, { useState, useEffect } from 'react';

const AdminTool = () => {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({
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

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("personalInformation.")) {
      const field = name.split(".")[1];
      setFormData(prevData => ({
        ...prevData,
        personalInformation: {
          ...prevData.personalInformation,
          [field]: value
        }
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const validatePersonalInformation = () => {
    const { firstName, lastName, email, phone } = formData.personalInformation;
    let errors = {};
    let isValid = true;

    if (firstName.trim() === '') {
      errors.firstName = 'First Name is required';
      isValid = false;
    }

    if (lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (phone.trim() === '') {
      errors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      personalInformation: errors
    }));

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (validatePersonalInformation()) {
      if (localStorage.getItem('cvData')) {
        setSuccessMessage('Data is edited successfully.');
      } else {
        setSuccessMessage('Data is added successfully.');
      }
      localStorage.setItem('cvData', JSON.stringify(formData));
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    }
  };
  

  const fetchCVData = () => {
    const storedCVData = JSON.parse(localStorage.getItem('cvData'));
    if (storedCVData) {
      setFormData(storedCVData);
    }
  };

  useEffect(() => {
    fetchCVData();
  }, []);

  return (
    <div>
      <h1>Admin Tool</h1>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>
          First Name:
          <input
            type="text"
            name="personalInformation.firstName"
            value={formData.personalInformation.firstName}
            onChange={handleChange}
            className={errors.personalInformation.firstName ? 'error' : ''}
          />
          {errors.personalInformation.firstName && <span className="error-msg">{errors.personalInformation.firstName}</span>}
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="personalInformation.lastName"
            value={formData.personalInformation.lastName}
            onChange={handleChange}
            className={errors.personalInformation.lastName ? 'error' : ''}
          />
          {errors.personalInformation.lastName && <span className="error-msg">{errors.personalInformation.lastName}</span>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="personalInformation.email"
            value={formData.personalInformation.email}
            onChange={handleChange}
            className={errors.personalInformation.email ? 'error' : ''}
          />
          {errors.personalInformation.email && <span className="error-msg">{errors.personalInformation.email}</span>}
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="personalInformation.phone"
            value={formData.personalInformation.phone}
            onChange={handleChange}
            className={errors.personalInformation.phone ? 'error' : ''}
          />
          {errors.personalInformation.phone && <span className="error-msg">{errors.personalInformation.phone}</span>}
        </label>
        <br />
        <h2>Education</h2>
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
        ></textarea>
        <br />
        <h2>Work Experience</h2>
        <textarea
          name="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
        ></textarea>
        <br />
        <h2>Skills</h2>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Update CV</button>
        {successMessage && <div className="success-msg">{successMessage}</div>}
      </form>
    </div>
  );
};

export default AdminTool;

