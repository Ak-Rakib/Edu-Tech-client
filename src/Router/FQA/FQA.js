import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FQA = () => {
    return (
        <div className='mt-3'>
           <h1 className='text-center mb-3'> Frequently Ask Question</h1>
            <Row className='d-flex justify-content-between'>
                <Col xs={12} md={4} lg ={4}>
                    <div className='mb-5'>
                        <h5>Information about this site</h5>
                        <p>Edu-Tech is e-learning platform, where you can learn essential
                            topics about web-development and CPC.i hope, This site helpful
                            all of you for learning. 
                        </p>
                    </div>
                    <div>
                        <h5>Why This site?</h5>
                        <p>
                        Edu-Tech is e-learning platform, where you can learn essential
                        topics about web-development and CPC.i hope, This site helpful
                        all of you for learning. 
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg ={4}>
                    <div className='mb-5'>
                        <h5>How many Courses are there?</h5>
                        <p>
                        Edu-Tech is e-learning platform, where you can learn essential
                        topics about web-development and CPC.i hope, This site helpful
                        all of you for learning.
                        </p>
                    </div>
                    <div>
                        <h5>Why learn?</h5>
                        <p>
                        Edu-Tech is e-learning platform, where you can learn essential
                        topics about web-development and CPC.i hope, This site helpful
                        all of you for learning
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FQA;