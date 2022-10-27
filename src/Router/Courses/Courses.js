import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h1>Course {allCourse.length}</h1>
        </div>
    );
};

export default Courses;