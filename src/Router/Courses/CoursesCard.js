import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CoursesCard = ({course}) => {
    return (
        <div>
             <Card>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                        {course.paragraph}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="outline-dark">Dark</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CoursesCard;