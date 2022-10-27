import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col xs={6} md={4} lg ={2}>
                    <RightSideNav></RightSideNav>
                </Col>
                <Col xs={12} md={8} lg={10}>
                    <Outlet></Outlet>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Main;