import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';

export default function LandingPagePincodeForm() {
  return (
    <Container fluid style={{alignSelf:"center", width:"50%", marginTop:"40px"}}>
        <h1>Order food to your door</h1>

        <Form>
      <Form.Group>
          <Form.Control type="text" placeholder='Pincode'/>
        </Form.Group>
        <Button style={{marginTop:"5px", color:"white", backgroundColor:"black"}}>Find Food</Button>
        </Form>
    </Container>
  )
}
