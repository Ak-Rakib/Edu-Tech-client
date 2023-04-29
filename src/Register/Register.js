import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../Contexts/ContextProvider';
import useTitle from '../Hooks/useTitle';

const Register = () => {
    const {logInWithGoogle, signUp, userUpdateProfile} = useContext(AuthProvider);
    const [error, setError] = useState('')
    const Provider = new GoogleAuthProvider()
    useTitle('Register');

    const googleHandler = ()=> {
          logInWithGoogle(Provider)
          .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
          })
          .catch(error => console.log(error));
    }

    const signUpHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateProfileHandler(name, photoURL)
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message);
        });
    }

    const updateProfileHandler = (name, photoURL) => {
          const profile = {
            displayName : name,
            photoURL : photoURL
          }
          userUpdateProfile(profile)
          .then(()=> {})
          .catch(error => console.log(error));
    }

    
    return (
        <div className='mt-3'>
             <Form onSubmit={signUpHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control name='photoURL' type="Photo" placeholder="PhotoURL"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Text className="text-muted text-danger">
                       {error}
                </Form.Text>
                <p>Have an account? please do <Link to='/login'>LogIn</Link> </p>
                        <br></br>
                <Button  variant="outline-dark" type="submit">
                    Register
                </Button>
                <Button onClick={googleHandler} className='ms-3'  variant="outline-dark" type="submit">
                    Sign-In with Google
                </Button>

            </Form>
        </div>
    );
};

export default Register;