import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div>
            {
                data.map(category => <p
                    key={category.id}>
                    <Link to='/courses'>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default RightSideNav;