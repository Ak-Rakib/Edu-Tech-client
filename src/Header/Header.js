import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaLightbulb, FaMoon, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../Contexts/ContextProvider';
import './Header.css'




const Header = () => {
    const {user, logOut} = useContext(AuthProvider);
    // console.log(user)
    const logOutHandler = () => {
        logOut()
       .then(()=> {})
       .catch(error => console.log(error));
   }

//  ---  --------------
// set Dark Mood
// --------------------

const [theme, setTheme] = useState('light');
const darkMoodHandler = ()=> {
    if(theme === 'light'){
        setTheme('dark')
    } else {
        setTheme('light');
    }
};

useEffect(()=> {
    document.body.className = theme;
},[theme]);


    return (
<div className={`Header ${theme}`}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none'}} to='/courses'>Courses</Link> </Nav.Link>
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none'}} to='/fqa'>FAQ</Link> </Nav.Link>
                        <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none'}} to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                            <Nav>
                        { user?.uid ?
                        <>
                            <Link onClick={logOutHandler} className='text-light me-3' style= { {textDecoration: 'none', fontWeight:'bold'}}>Log-Out</Link>
                            <span className='text-light'>{user?.displayName}</span>
                            </>
                        :
                        <>
                            <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none'}} to='/login'>Log-In</Link></Nav.Link>
                            <Nav.Link > <Link className='text-light' style= { {textDecoration: 'none'}} to='/register'>Register</Link></Nav.Link>
                        </>
                        }
                    </Nav>
                    <Nav className='darkMood'>
                    <FaLightbulb className='text-warning' onClick={darkMoodHandler}></FaLightbulb>
                    </Nav>
                    <Navbar.Text>
                        { 
                        user?.photoURL?
                        <Image
                            src={user?.photoURL}
                            style = {{height: '40px', marginLeft:'10px'}}
                            roundedCircle
                        ></Image>
                        :
                        <FaUser></FaUser>
                        }
                  </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
    );
};

export default Header;