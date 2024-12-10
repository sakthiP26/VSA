import React from 'react';
import './Trainings.css'; // Import the CSS file for styling

// Import images
import t1 from './t1.jpg';
import t2 from './t4.jpg';
import t3 from './t3.jpg';
import t4 from './t2.jpg';
import t5 from './t5.jpg';
import t6 from './t6.jpg';
import t7 from './t7.jpg';
import t8 from './t8.jpg';
import t9 from './t9.jpg';
import t10 from './t10.jpg';
import t11 from './t11.jpg';
import t12 from './t12.jpeg';
import t13 from './t13.jpg';
import t14 from './t14.jpeg';
import t15 from './t15.jpg';

const courses = [
  { id: 1, title: 'Python Full Stack', image: t1 },
  { id: 2, title: 'Frontend Developer', image: t2 },
  { id: 3, title: 'Business Analytics', image: t3 },
  { id: 4, title: 'Java Full Stack', image: t4 },
  { id: 5, title: 'Backend Developer(JAVA)', image: t5 },
  { id: 6, title: 'Backend Developer(PYTHON)', image: t6 },
  { id: 7, title: 'Backend Developer(NODE.JS)', image: t7 },
  { id: 8, title: 'UI/UX Designing', image: t8 },
  { id: 9, title: 'MERN Stack Developer', image: t9 },
  { id: 10, title: 'Data Science', image: t10 },
  { id: 11, title: 'Software Testing', image: t11 },
  { id: 12, title: 'Digital Marketing', image: t12 },
  { id: 13, title: 'Mobile App Development', image: t13 },
  { id: 14, title: 'AWS', image: t14 },
  { id: 15, title: 'Data Analytics', image: t15 }
];

const Trainings = () => {
  return (
    <div className="trainings-page">
      <h1>Available Training Courses</h1>
      <div className="course-container">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainings;
