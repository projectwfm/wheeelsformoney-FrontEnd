import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import '../Components/styles/OtpPage.css';
import Home from './Home';


const OtpPage = ({username , setUserDetails}) =>{

  let history = useHistory()

  const [seconds, setSeconds] = useState(59);
  const[otp, setotp] = useState("");
  let[verified , setVerified] = useState(false);

  let handleLogin = ()=>{
                          axios.get(`http://localhost:9091/user/verifyotp`, 
                          { headers : { email: username  , otp:otp} })
          .then((response)=>{
           console.log(response.status);
            if(response.status==200)
            {
            setVerified(true);
            }
            })

          .catch((error)=>{
            alert("Enter correct otp")
            })

 }

  // useEffect(() => {
  //   const interval = setInterval(() => {  
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //   }, 1000);
  
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [seconds]);

  // const resendOTP = () => {
  //   setSeconds(59);
  // };

  const handleChange = event =>{
    setotp(event.target.value);
  }
  const handleClick =()=>{
     setotp("")
    }


  return (
  <div>
    {verified==false && <div className='main_otp_bx'>
           <h4>Enter the OTP sent to you to verify your identity</h4>
         
          <div className="otp_bx">
            <input type="text"   maxLength={6} onChange={handleChange} value={otp}/>
          </div>
          <div className='main_buttom'>
            <button className="btn btn-success otp_verify_btn" onClick={handleLogin}>Login</button>
            <button className='btn btn-secondary clear_btn' onClick={handleClick}>clear</button>
          </div>
    
          {/* <div>
            {seconds > 0  ? (
              <p className='didnt_receive_code'>
                Time Remaining:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p className='didnt_receive_code'>Didn't recieve code?</p>
            )}   

            <button className='resend_otp_btn' disabled={seconds > 0}
                onClick={resendOTP}>Resend OTP</button>
          </div> */}
    </div>}

    {verified==true && <Home setUserDetails={setUserDetails}/>}

  </div>
    )
}

export default OtpPage

