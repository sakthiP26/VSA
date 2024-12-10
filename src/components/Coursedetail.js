import React from 'react';
import { useParams } from 'react-router-dom';
import  courses  from './courses';  // Import courses from where they are stored.

const Coursedetail = () => {
  const { id } = useParams();  // Get the course ID from the URL
  const course = courses.find(c => c.id === parseInt(id));  // Find the course by ID

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail">
      <img src={course.image} alt={course.title} className="course-image" />
      <h2>{course.title}</h2>
      <p>Details about the course will be here.</p>
      {/* You can add more detailed information about the course here */}
    </div>
  );
};

export default Coursedetail;
