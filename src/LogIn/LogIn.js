import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../Contexts/ContextProvider';

const LogIn = () => {
    const { signIn } = useContext(AuthProvider)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInHandler = event => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          signIn(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            setError('')
            form.reset();
          })
          .catch(error => {
            console.log(error)
            setError(error.message);
          });
    }


    return (
        <div className='mt-3'>
            <Form onSubmit={signInHandler}>
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
                <Form.Text className="text-muted">
                        {error}
                </Form.Text>
                <p>Have'nt any account? please do <Link to='/register'>Register</Link> </p>
                    <br></br>
                <Button  variant="outline-dark" type="submit">
                    Log-In
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;