import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../courseData';


const CourseList = () => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={course.link}>View Course</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
