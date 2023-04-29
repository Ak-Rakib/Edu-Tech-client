import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const CoursesCard = ({ course }) => {
    return (
        <div>
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
                        style={{ width: '100%' }}
                        className="mb-2"
                    >
                        <Card.Img style={{ width: '830px', height: '390px' }} variant="top" src={course.img} />
                        <Card.Body>
                            <Card.Title>{variant} {course.name}</Card.Title>
                            <Card.Text>
                                {course.paragraph}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </>
        </div>
    );
};

export default CoursesCard;