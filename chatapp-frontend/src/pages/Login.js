import React, {useState} from 'react'
import {Button, Form, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Login() {
    const[email, setEmail] = useState ('');
    const[password, setPassword] = useState ('');

    function handleLogin (e) { 
        e.preventDefault();
        
    }

return (
<Container>


    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className='py-4'>
            <p className='text-center'>
                Don't have an Account? <Link to="/signup"> Signup</Link>
            </p>
      </div>
    </Form>
    </Container>
);
}

export default Login;