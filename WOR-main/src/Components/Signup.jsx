import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Signup.css';
import img from './Images/imgSignup.webp';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SignupPg2 from './SignupPg2';

function Signup() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] =useState("")
  const[verified,Verifiedset] =useState(false);

  const [emailErr, setEmailErr] = useState('');
  const [otpError, setOtpError] = useState('');
  const [successMsg, setSuccessMsg] = useState('')
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;

  
  const handleEmail =(e) =>{
    setEmail(e.target.value);
    // setSubmitted(false);
  };  

  const handleOtp = (e)=>{
    setOtp(e.target.value);
    // setSubmitted(false);
  };

    const sendOtp =(e)=>{
      e.preventDefault();
      console.log(email);
      axios.get("http://localhost:9091/user/sendotp",
      {
       headers :{'email':email,'type' :"signup"}         
      })
      .then((res)=>{
       console.log(res);
       alert("Otp Sent")
      })
      .catch((er)=>{
                    console.log(er.message);
                    alert("Email already exist..!!");
                  })
   } 
  
let history=useHistory()

 const verifyOtp =(e)=>{
  e.preventDefault();
  console.log(otp);
  axios.get("http://localhost:9091/user/verifyotp",
  {
   headers:{'email':email,'otp':otp}
  })
  .then((res)=>{
    console.log(res.status);
    alert("OTP Verified, click OK for further process..!!")
    if(res.status==200);
    {
      Verifiedset(true);
    }
  })
  .catch((error)=>{
    alert("wrong OTP, enter the correct OTP..!")
  })
  
 } 

  return (
    <>
     {verified ==false && <div className='signup'>
        <div className='img-signup' >
          <img src={img} alt="" />
        </div>

        <div className='content-box-signup'>
            <div className="sign-form">
              <h2>Create your Account</h2>
            
              <div className='class-verify'>
                <input type="email"   placeholder='Email' onChange={handleEmail} value={email} /> 
                <button className='btn btn-success verify' onClick={sendOtp} > Send OTP</button>                 
              </div>

              <div className='class-verify'>
                <input type="text"  placeholder='Enter otp' onChange={handleOtp} value={otp} /> 
                <button  className="btn btn-success verify" onClick={verifyOtp}> Verify OTP</button> 
              </div>

            </div>
        </div>

      </div>}
      {verified == true && <SignupPg2 /> }


      
    </>)
}
export default Signup;

