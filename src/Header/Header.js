import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src='/websiteLogo.png'
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Edu-Tech
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Courses</Nav.Link>
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;