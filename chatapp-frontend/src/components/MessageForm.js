import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function MessageForm() {

    function handleSubmit(e) { 
        e.preventDefault();
    }
    return (
    <>
    <div className='messages-output'> </div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <Form.Group>
                        <Form.Control type="text" placeholder='Your Message'></Form.Control>
                    </Form.Group>

                </Col>
                <Col md={1}>
                    <Button variant='primary' type="submit" style={{ width: "100%", backgroundColor: "Green" }}>
                        <i className='fas fa-paper-plane'></i>
                    </Button>
                </Col>
            </Row>

        </Form>
    </>
  )
}

export default MessageForm