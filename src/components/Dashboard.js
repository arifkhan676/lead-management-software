import React from 'react'
import "./dash.css"

function Dashboard(){
    return(
    <div className="f-div">
        <div className="left-div">
           <div className="title-div">
            <div className="reob">
                <h1>reobiz</h1>
            </div>
            <div className="admin-div">
            <h2>Admin</h2>
            </div>
           </div>
           <div className="left-content">
               <div className="each-cont">
                <h2>Dashboard</h2>
               </div>
               <div className="each-cont">
                <h2>My leads</h2>
               </div>
               <div className="each-cont">
                <h2>Campaign</h2>
               </div>
               <div className="each-cont">
                <h2>Counselor</h2>
               </div>
               <div className="each-cont">
                <h2>Profile</h2>
               </div>
           </div>
        </div>
        <div className="right-div">
        </div>
    </div>
        )
}
export default Dashboard;