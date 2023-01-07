import React, { useState } from 'react';
import './styles/Forgot.css';
import forgotimg from "./Images/forgot-img.jpg"

function Forgot() {

    let [userdetails, setuserDetails] = useState({ username: "", password: "" });
    

   let handlesubmit=(e)=>{
   e.preventDefault()

   alert("submitted")

   }

    return (
        <div className='forgotpage' >
                  <div className="forgot-img">
                    <img src={forgotimg} alt="" />
                  </div>
                <div className='contentBx-forgot' >
                    <form className='forgot-form' onClick={handlesubmit} >
                       <h2>Forgot password</h2>
                      <input type="text"
                                  placeholder='Email'
                                  onChange={({target})=>
                                  {setuserDetails({...userdetails,usename:target.value})
                                        }} />
            
                      <button  className='btn-fogot'>Submit</button>
                   </form>
                 </div>        
        </div>
    )
}

export default Forgot
