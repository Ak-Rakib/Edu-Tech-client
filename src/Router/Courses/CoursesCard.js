import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const CoursesCard = ({course}) => {
    return (
        <div>
             <Card className='mb-5'>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                        {course.paragraph}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-dark'>
                
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CoursesCard;