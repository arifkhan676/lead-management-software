import React, { useState } from 'react'
import "./dash.css"
import logo from "../logo-light.png"
/* cd lead-management-software */
import ListIcon from '@mui/icons-material/List';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DropDownList } from "@progress/kendo-react-dropdowns";

function Dashboard(){
    const list = useState(['All Leads','New Leads','Import Leads']);
    const [keep,allKeep] = React.useState('My Leads');
    const handleChange=(event)=>{
         allKeep(event.target.value);
    }
    return(
    <div className="f-div">
        <div className="left-div">
           <div className="title-div">
            <div className="reob">
               <img src={logo} alt="logo" />
            </div>
            <div className="admin-div">
            <h2>Admin</h2>
            </div>
           </div>
           <div className="left-content">
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h2>Dashboard</h2>    <ArrowForwardIosIcon className='ListI' />       </a>  </li>
               <li className='list' > <a href="#"  > <ListIcon className='ListI' /> <DropDownList data={list} onChange={handleChange} value={keep} />   <ArrowForwardIosIcon className='ListI' />      </a>    </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h2>Campaign</h2>    <ArrowForwardIosIcon className='ListI' />       </a> </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h2>Counselor</h2>   <ArrowForwardIosIcon className='ListI' />       </a> </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h2>Profile</h2>     <ArrowForwardIosIcon className='ListI' />     </a>  </li>
               <li className='list'> <a href="#"> <ListIcon className='ListI' /> <h2>Setting</h2>      <ArrowForwardIosIcon className='ListI' />     </a>    </li>

           </div>
        </div>
        <div className="right-div">
        </div>
    </div>
        )
}
export default Dashboard;