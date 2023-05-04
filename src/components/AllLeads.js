import React from 'react'
import Form from 'react-bootstrap/Form';
import "./AllLeads.css"
import Button from 'react-bootstrap/esm/Button';

function AllLeads() {
  return (
    <div className='Leads'>
        <div className="container">
        <Form className='d-flex'>
         <Form.Control 
           type='search'
           placeholder='Search'
           className='search_btn'
           aria-label="search"
           />
           <Button variant="success" > Search </Button>
          </Form>

          <Button>
          <i class="fa fa-plus" aria-hidden="true"></i> Add User
         </Button>
        </div>

     
    </div>
  )
}

export default AllLeads
