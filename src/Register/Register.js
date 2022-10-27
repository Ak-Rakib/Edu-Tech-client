import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthProvider } from '../Contexts/ContextProvider';

const Register = () => {
    const {logInWithGoogle} = useContext(AuthProvider);
    const Provider = new GoogleAuthProvider()

    const googleHandler = ()=> {
          logInWithGoogle(Provider)
          .then(result => {
            const user = result.user;
            console.log(user)
          })
          .catch(error => console.log(error));
    }
    return (
        <div className='mt-3'>
             <Form>
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