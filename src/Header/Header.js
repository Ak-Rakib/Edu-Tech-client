import React from 'react';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../Contexts/ContextProvider';
import './Header.css'




const Header = () => {
    const {user} = useContext(AuthProvider);
    console.log(user)
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
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none', fontWeight:'bold'}} to='/courses'>Courses</Link> </Nav.Link>
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none', fontWeight:'bold'}} to='/fqa'>FAQ</Link> </Nav.Link>
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none', fontWeight:'bold'}} to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none', fontWeight:'bold'}} to='/login'>Log-In</Link></Nav.Link>
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none', fontWeight:'bold'}} to='/register'>Register</Link></Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='text-light'>
                            {user?.displayName}
                            <FaUser></FaUser>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;