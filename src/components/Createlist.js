import React, { useEffect, useState } from 'react'
import "./Createlist"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Card } from '@mui/material';
import myImg from "./arif1.jpg"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Createlist = () => {

     const [userdata,setName] = useState({
          fName:"",
          lName:"",
          email:"",
          number:"",
          city:""
     });
     
     const [userimg,setImg] = useState("");
     const [previewImg,SetpreviewImg] = useState("");
  
     function handleChange(e){
          const {name,value} = e.target;
        setName((preValue)=>{
          return {
               ...preValue,
               [name]:value
          }
        })
     }
  
   function setProfile(event){
         setImg(event.target.files[0]);
   }
   useEffect(()=>{
     if(userimg){
          SetpreviewImg(URL.createObjectURL(userimg))
     }
   },[userimg]);
  
  
   const {fName,lName,email,number}= userdata;
  
      const submitData = (e)=> {
     e.preventDefault();
  
     if(fName === "" ){
          toast.error("First Name is required!");
      }
      if(lName === "" ){
          toast.error("First Name is required!");
      }
      else if(email === ""){
           toast.error("Email is required!");
      }else if(!email.includes("@")){
          toast.error("Email is invalid!");
      }
      else if(number ===""){
          toast.error("Number is required!");
      }
      else{
           toast.success("Successfully registered!");
      }
  
   };
  
    return (
      <div className='container-fluid'>
          <Card className='shadow mt-3 p-3 bg-dark'>
              <div className="img-card">
                  <img className='myImg' src={previewImg ? previewImg : myImg} alt="myImg" />
              </div>
        <Form>
          <Row>
            <Col>
            <Form.Group className='mb-3 col-lg-6' controlId='formBasicName'>
             <Form.Label> First Name </Form.Label>
             <Form.Control type='Text' name='fName' onChange={handleChange} value={userdata.fName}  placeholder='First Name'/>
        </Form.Group>
        <Form.Group className='mb-3 col-lg-6' controlId='formBasicName'>
             <Form.Label> Last Name</Form.Label>
             <Form.Control type='text' name='lName' onChange={handleChange} value={userdata.lName}    placeholder='Last Name'/>
        </Form.Group>
        <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
             <Form.Label>Email Address</Form.Label>
             <Form.Control type='email' onChange={handleChange}   name='email' value={userdata.email}  placeholder='Enter Email'/>
        </Form.Group>
        <Form.Group className='mb-3 col-lg-6' controlId='formBasicFile'>
             <Form.Label>Chose File</Form.Label>
             <Form.Control type='File'   onChange={setProfile} value={previewImg}  placeholder='Chose File'/>
        </Form.Group>
            </Col>
  
            <Col>
            <Form.Group className='mb-3 col-lg-6' controlId='formBasicNumber'>
             <Form.Label>Number</Form.Label>
             <Form.Control type='number' onChange={handleChange} name='number'  value={userdata.number}  placeholder='Number'/>
        </Form.Group>
        <Form.Group className='mb-3 col-lg-6' controlId='formGridCity'>
             <Form.Label>City</Form.Label>
             <Form.Control type='text' name='city' onChange={handleChange}  value={userdata.city}  placeholder='City'/>
        </Form.Group>
        <Form.Group className='mb-3 col-lg-6' controlId='formGridCheckbox'>
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant='primary' onClick={submitData} > Submit </Button>
  
            </Col>
          </Row>
  
        </Form>
        </Card>
        <ToastContainer position='top-center' />
      </div>
  )
}

export default Createlist
