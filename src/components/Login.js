import React from 'react'
import './login.css';
import pic from "../DMA.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Login() {
  return (
    <div className="App">
      <div className="leftCol">
        <div className="content">
          <div className="img">
          <img className='logo' src={pic} alt="" />
          </div>
          <div className="content-script">
          <h1>DMA</h1>
           <p>DIGITAL MARKETING AGENCY</p>
          </div>
        </div>
        <div className="rest-content">
        <h1>WELCOME</h1>
         <p>Manage leads, sales activities, contact history,
           multiple <br /> oppotunities all in one place
         </p>
        </div>
      </div>
      <div className="rightCol">
        <div className="rightContent">
        <h1>LOGIN</h1>
        <div className="input-div">
        <span>Email</span>
        <input className="inp" type="text"  />
        <span>Password</span>
        <input className="inp" type="text"  />
        <p  >Forget the Password?</p>
        </div>
        <button type="button" className="button">Submit</button>
        <p className="pTag" > Or Sign In With </p>

       <div className="footerIcon">
        <InstagramIcon />
        < FacebookIcon />  
        < LinkedInIcon />
        < TwitterIcon/>
       </div>


        </div>
      </div>
    </div>
  );
}

export default Login;
