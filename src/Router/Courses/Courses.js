import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from './CoursesCard';


const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div className='m-3'>
            {
                allCourse.map(course => <CoursesCard className = 'mb-4'
                    key={course.id}
                    course = {course}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Courses;