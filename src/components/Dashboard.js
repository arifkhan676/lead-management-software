import React from 'react'
import "./dash.css"
import logo from "../logo-light.png"
/* cd lead-management-software */
import ListIcon from '@mui/icons-material/List';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';


function Dashboard(){
    const navigate = useNavigate();
    function addUser (){
        navigate("/AllLeads");
    }
    function addCreate (){
        navigate("/Createlist");
    }
    function login (){
        navigate("/Login");
    }
    
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
               <li className='list'> <a href="#/"> <ListIcon className='ListI' /> <h3>Dashboard</h3>    <ArrowForwardIosIcon className='ListI' />  </a>  </li>
               <li className='list' > <a href="#/"  > <ListIcon className='ListI' />
               <DropdownButton id="dropdown-basic-button" title="My Leads">
                 <Dropdown.Item onClick={addUser}>All leads</Dropdown.Item>
                 <Dropdown.Item onClick={addCreate}>Create Leads</Dropdown.Item>
                 <Dropdown.Item href="/">New Leads</Dropdown.Item>
                 </DropdownButton>
                <ArrowForwardIosIcon className='ListI' /> </a> </li>
               <li className='list'> <a href="#/"> <ListIcon className='ListI' /> <h3>Campaign</h3>    <ArrowForwardIosIcon className='ListI' />  </a> </li>
               <li className='list'> <a href="#/"> <ListIcon className='ListI'/> <h3>Counselor</h3>   <ArrowForwardIosIcon className='ListI' /> </a> </li>
               <li className='list'> <a href="#/"> <ListIcon className='ListI' /> <h3>Profile </h3>     <ArrowForwardIosIcon className='ListI' />  </a>  </li>
               <li className='list'> <a href='#/' onClick={login}> <ListIcon className='ListI' />  <h3>Login </h3> <ArrowForwardIosIcon className='ListI' />     </a>    </li>

           </div>
        </div>
        <div className="right-div">
        </div>


    </div>
        )
}
export default Dashboard;