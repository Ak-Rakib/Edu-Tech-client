import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from './CoursesCard';


const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div className='mt-3'>
            {
                allCourse.map(course => <CoursesCard
                    key={course.id}
                    course = {course}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Courses;