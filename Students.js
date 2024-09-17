import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/students`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
