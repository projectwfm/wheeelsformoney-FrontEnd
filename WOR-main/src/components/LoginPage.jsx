import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import mobile from '../images/login.png'
import './login.css';

function LoginPage() {

  
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [userErr,setUserErr]=useState(false);
  const [passErr,setPassErr]=useState(false);

 // window.history.forward();

     function handlesubmit(e){
     e.preventDefault()
     if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }
      }

      function userhandler(e)
      {
        let item = e.target.value;
        if(item.length<3)
        {
          setUserErr(true)
        }else{
          setUserErr(false)
        }
        setUser(item)
      }

      function passwordHandler(e)
      {
        let item = e.target.value;

        if(item.length<3)
        {
          setPassErr(true)
        }else{

          setPassErr(false)
        }
        setPassword(item)
      }

return (<div>
 <div className='loginpage'>
      
      <div className='login-img'>
      <img src={mobile} alt="" />
      </div>

      <div className="login-contentBx">
      <form className='login-form' onSubmit={handlesubmit}> 
      <input type="text" placeholder='Username' onChange={userhandler}/> {userErr?<span>User Not Valid</span>:""}
      <input type="text" placeholder='Password'onChange={passwordHandler}/>  {passErr?<span>Password Not Valid</span>:""}
      <button type="submit-1" className='btn-login' >Login</button>    
      </form>
      <div/>

      <div className="login-remember">
      <Link to="/forgot"><h6>Forgotten password?</h6></Link> 
      <Link to="/signup"><h6 className='signup1'>Sign up</h6></Link>
      </div>

    </div>
    </div>
</div>)

}

export default LoginPage