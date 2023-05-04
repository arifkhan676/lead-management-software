import React from 'react'
import Form from 'react-bootstrap/Form';
import "./AllLeads.css"
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';


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

    <div className="container-fluid">

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th> Profile </th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1 </td>
            <td> Arif </td>
            <td> khan </td>
            <td> arif@gmail.com </td>
            <td> xx </td>
            <td> 01811225515 </td>
            <td>Dhaka</td>
          </tr>
        </tbody>
      </Table>
      </div>

    </div>

  )
}

export default AllLeads
