import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useTitle from '../../Hooks/useTitle';

const Category = () => {
    const courses = useLoaderData();
    useTitle('Category');
    // console.log(courses.name)
    return (
        <>
            {[
                // 'Primary',
                // 'Secondary',
                // 'Success',
                // 'Danger',
                // 'Warning',
                // 'Info',
                // 'Light',
                'Dark',
            ].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Img style={{ width: '288px', height: '160px' }} variant="top" src={courses.img} />
                    <Card.Body>
                        <Card.Title>{variant} {courses.name}</Card.Title>
                        <Card.Text>
                            {courses.paragraph}
                        </Card.Text>
                        <Link to='/access'> <Button variant="outline-dark">Access Course</Button></Link>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Category;