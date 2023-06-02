import React, {useState} from 'react'
import {Button, Form, Container} from 'react-bootstrap'

function handleSignup(e) {
    e.preventDefault();
}

function Signup() {
    const[email, setEmail] = useState ('');
    const[password, setPassword] = useState ('');
    const[name, setName] = useState('');

  return (
    <Container>


    <Form onSubmit={handleSignup}>
    <h1 className='text-center'>Create Account</h1>

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Signup