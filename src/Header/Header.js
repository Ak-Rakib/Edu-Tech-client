import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import './Header.css'




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
                        <Nav.Link href="/courses">Courses |</Nav.Link>
                        <Nav.Link href="/fqa">FAQ |</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <FaUser></FaUser>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;