import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses-category')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className='bg-dark text-center mt-3 p-3'>
            {
                data.map(category => <p
                    key={category.id}>
                    <Link className='text-light' style= { {textDecoration: 'none', fontWeight:'bold'}} to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default RightSideNav;