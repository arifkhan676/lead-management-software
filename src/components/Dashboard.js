import React, { useState } from 'react'
import "./dash.css"
import logo from "../logo-light.png"
/* cd lead-management-software */
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';

function Dashboard(){
    
    return(
    <div className="f-div">
        <div className="left-div">
           <div className="title-div">
            <div className="reob">
               <img src={logo} alt="logo" />
            </div>
            <div className="admin-div">
            <h3>Admin</h3> 
            </div>
           </div>
           <div className="left-content">
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h3>Dashboard</h3>    <ArrowForwardIosIcon className='ListI' />  </a>  </li>
               <li className='list' > <a href="#"  > <ListIcon className='ListI' />
               <DropdownButton id="dropdown-basic-button" title="My Leads">
                 <Dropdown.Item href="/AllLeads">All leads</Dropdown.Item>
                 <Dropdown.Item href="/ImportList">Import Leads</Dropdown.Item>
                 <Dropdown.Item href="/">New Leads</Dropdown.Item>
                 </DropdownButton>
                <ArrowForwardIosIcon className='ListI' /> </a> </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h3>Campaign</h3>    <ArrowForwardIosIcon className='ListI' />  </a> </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI'/> <h3>Counselor</h3>   <ArrowForwardIosIcon className='ListI' /> </a> </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h3>Profile </h3>     <ArrowForwardIosIcon className='ListI' />  </a>  </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <Link to="/login"  > <h3>Login </h3>   </Link>      <ArrowForwardIosIcon className='ListI' />     </a>    </li>

           </div>
        </div>
        <div className="right-div">
        </div>
    </div>
        )
}
export default Dashboard;