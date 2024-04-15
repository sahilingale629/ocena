import React, { useState } from 'react';
import './SimpleForm.css'; // Import the CSS file
import jsPDF from 'jspdf';

function SimpleForm() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Course:', course);
    // You can perform any additional actions like sending data to backend here
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Course: ${course}`, 10, 20);
    doc.save('user_info.pdf');
  };

  return (
    <div className="form-container">
      {/* Add form-container class */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Course:
            <select value={course} onChange={handleCourseChange}>
              <option value="">Select Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleGeneratePDF}>
          Generate PDF
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
