import React, { useState } from 'react'

function Forgot() {

    let [userdetails, setuserDetails] = useState({ username: "", password: "" });
    

   let handlesubmit=(e)=>{
   e.preventDefault()

   alert("submitted")

   }


    return (
        <div className='body' >
           
                 <div className='login' >
                 <h1>Forgot password</h1><br/>
                    <form className='form' onClick={handlesubmit} >
                            <label className='label' htmlFor="">Enter your Mobile number</label><br/>
                              <input type="text"
                                  placeholder='mobile number'
                                  onChange={({target})=>
                                  {setuserDetails({...userdetails,usename:target.value})
                                        }} />
                             <br/>
                            <button  className='btn-login'>Submit</button>
                   </form>
                 </div>
                      
            
        </div>
    )
}

export default Forgot
