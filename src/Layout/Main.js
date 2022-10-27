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
                <Col xs={12} md={8}>
                    <Outlet></Outlet>
                </Col>
                <Col xs={6} md={4}>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Main;