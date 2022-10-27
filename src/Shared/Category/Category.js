import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const courses = useLoaderData();
    console.log(courses.name)
    return (
        <div>
            <h1>Course{courses.id}</h1>
        </div>
    );
};

export default Category;