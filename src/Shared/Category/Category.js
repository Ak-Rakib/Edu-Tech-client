import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category = () => {
    const courses = useLoaderData();
    // console.log(courses.name)
    return (
        <div className='mt-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={courses.img} />
                <Card.Body>
                    <Card.Title>{courses.name}</Card.Title>
                    <Card.Text>
                        {courses.paragraph}
                    </Card.Text>
                   <Link to='/access'> <Button  variant="outline-dark">Access Course</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;