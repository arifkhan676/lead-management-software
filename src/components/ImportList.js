import React from 'react'
import "./ImportList.css"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Card } from '@mui/material';
import myImg from "./arif1.jpg"

const ImportList = () => {
  return (
    <div className='container-fluid'>
        <Card className='shadow mt-3 p-3 bg-dark'>
            <div className="img-card">
                <img className='myImg' src={myImg} alt="myImg" />
            </div>
      <Form>
        <Row>
          <Col>
          <Form.Group className='mb-3 col-lg-6' controlId='formBasicName'>
           <Form.Label> First Name </Form.Label>
           <Form.Control type='Text ' placeholder='First Name'/>
      </Form.Group>
      <Form.Group className='mb-3 col-lg-6' controlId='formBasicName'>
           <Form.Label> Last Name</Form.Label>
           <Form.Control type='text' placeholder='Last Name'/>
      </Form.Group>
      <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
           <Form.Label>Email Address</Form.Label>
           <Form.Control type='email' placeholder='Enter Email'/>
      </Form.Group>
      <Form.Group className='mb-3 col-lg-6' controlId='formBasicFile'>
           <Form.Label>Chose File</Form.Label>
           <Form.Control type='File' placeholder='Chose File'/>
      </Form.Group>
          </Col>

          <Col>
          <Form.Group className='mb-3 col-lg-6' controlId='formBasicNumber'>
           <Form.Label>Number</Form.Label>
           <Form.Control type='number ' placeholder='Number'/>
      </Form.Group>
      <Form.Group className='mb-3 col-lg-6' controlId='formGridCity'>
           <Form.Label>City</Form.Label>
           <Form.Control type='text' placeholder='City'/>
      </Form.Group>
      <Form.Group className='mb-3 col-lg-6' controlId='formGridCheckbox'>
      <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant='primary'> Submit </Button>

          </Col>
        </Row>

      </Form>
      </Card>
    </div>
  )
}

export default ImportList
