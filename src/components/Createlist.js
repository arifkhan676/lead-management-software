import React, { useEffect, useState } from 'react'
import "./Createlist"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from 'react-bootstrap/esm/Button';
import { Card } from '@mui/material';
import myImg from "./arif1.jpg"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';






const Createlist = () => {

     const [userdata, setName] = useState({
          Title: "",
          Organisations: "",
          Contact: "",
          Address: "",
          Mobile: "",
          Whatsapp: "",
          Today: "",
          Tags: "",
          email: "",
          fbURL: "",
          linkURL: ""

     });

     const [userimg, setImg] = useState("");
     const [previewImg, SetpreviewImg] = useState("");

     function handleChange(e) {
          const { name, value } = e.target;
          setName((preValue) => {
               return {
                    ...preValue,
                    [name]: value
               }
          })
     }

     function setProfile(event) {
          setImg(event.target.files[0]);
     }
     useEffect(() => {
          if (userimg) {
               SetpreviewImg(URL.createObjectURL(userimg))
          }
     }, [userimg]);





     const { Contact, email, Mobile } = userdata;

     const submitData = (e) => {
          e.preventDefault();
          if (Contact === "") {
               toast.error("First Name is required!");
          }
          else if (email === "") {
               toast.error("Email is required!");
          } else if (!email.includes("@")) {
               toast.error("Email is invalid!");
          }
          else if (Mobile === "") {
               toast.error("Number is required!");
          }
          else {
               toast.success("Successfully registered!");
          }

     };

     const options = [
          { value: 'x', label: 'x' },
          { value: 'y', label: 'y' },
          { value: 'z', label: 'z' }
     ]
     const options2 = [
          { value: 'x', label: 'x' },
          { value: 'y', label: 'y' },
          { value: 'z', label: 'z' }
     ]


     return (
          <div className='container-fluid'>
               <Card className='shadow mt-3 p-3 bg-dark'>
                    <div className="img-card">
                         <img className='myImg' src={previewImg ? previewImg : myImg} alt="myImg" />
                    </div>
 <Form>
      <Row>
           <Col>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                          <Form.Label className='yy'> Title </Form.Label>
                     </Col>
                     <Col>
                          <Form.Control className='uu'  type='Text' name='Title' onChange={handleChange} value={userdata.Title} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                          <Form.Label className='yy'> Organisations</Form.Label>
                     </Col>
                     <Col>
                          <Form.Control className='uu' type='text' name='Organisations' onChange={handleChange} value={userdata.Organisations} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>

                     </Col>
                     <Col>
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                          <Form.Label className='yy'>Contact Name</Form.Label>
                     </Col>
                     <Col>
                          <Form.Control className='uu' type='text' onChange={handleChange} name='Contact' value={userdata.Contact} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                          <Form.Label className='yy'>Address</Form.Label>
                     </Col>
                     <Col>
                          <TextareaAutosize className='uu'
                               aria-label="empty textarea"
                               style={{ width: 280, height: 70 }} onChange={handleChange} name='Address' value={userdata.Address} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                          <Form.Label className='yy'>Mobile</Form.Label>
                     </Col>
                     <Col>
                          <Form.Control className='uu' type='number' onChange={handleChange} name='Mobile' value={userdata.Mobile} />
                     </Col>
                </Row>

                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Whatsapp</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='number' onChange={handleChange} name='Whatsapp' value={userdata.Whatsapp} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Contact Today</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='text' onChange={handleChange} name='Contact' value={userdata.Contact} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Tags</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='text' onChange={handleChange} name='Tags' value={userdata.Tags} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Chose File</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='File' onChange={setProfile} value={previewImg} placeholder='Chose File' />

                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Assign To</Form.Label>
                     </Col>
                     <Col>
                     <FormControl className='uu'>
                     <RadioGroup 
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                     >
                          <FormControlLabel value="Everyone" control={<Radio />} label="Everyone" />
                          <FormControlLabel value="Customize Permission" control={<Radio />} label="Customize Permission" />
                     </RadioGroup>
                </FormControl>
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Select User</Form.Label>
                     </Col>
                     <Col>
                     <FormGroup  >
                     <FormControlLabel className='uu'  control={<Checkbox />} label="Admin" />
                     <FormControlLabel required control={<Checkbox />} label="Can view" />
                     <FormControlLabel required control={<Checkbox />} label="Can delete" />
                     <FormControlLabel required control={<Checkbox />} label="Can edit" />
                </FormGroup>
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Button className='btn-sub' variant='primary' onClick={submitData} > Submit </Button>
                     </Col>
                </Row>
        </Col>

                 


                 

           <Col>

           <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Lead Status</Form.Label>
                     </Col>
                     <Col>
                     <Select className='select' options={options} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Lead Source</Form.Label>
                     </Col>
                     <Col>
                     <Select className='select' options={options2} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Email</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='email' name='email' onChange={handleChange} value={userdata.email} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Facebook URL</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='text' name='fbURL' onChange={handleChange} value={userdata.fbURL} />
                     </Col>
                </Row>
                <Row className='mb-3' controlId='formBasicName'>
                     <Col>
                     <Form.Label className='yy'>Linkedin</Form.Label>
                     </Col>
                     <Col>
                     <Form.Control className='uu' type='text' name='linkURL' onChange={handleChange} value={userdata.linkURL} />
                     </Col>
                </Row>


           </Col>
      </Row>

                    </Form>
               </Card>
               <ToastContainer position='top-center' />
          </div>
     )
}

export default Createlist
