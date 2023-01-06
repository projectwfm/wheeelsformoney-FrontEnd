import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css'
import img from '../images/login.png';
import axios from 'axios';



function Signup() {
  let [firstname, setfirstname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let fname = (fname) => setfirstname(fname.target.value);
  let mail = (mail) => setemail(mail.target.value);
  let psw = (psw) => setpassword(psw.target.value);


  const register =()=>{
     axios.post(" http://localhost:9091/user/signUp",
     {
      username:firstname,
      password:password,
      email:email

     }).then((res)=>{
      console.log(res);
     })
  }

  let handlesubmit = (e) => {
    e.preventDefault()
    if (firstname.length < 3) {
    }
    alert("submited")
  }

  return (
    <div>
      <div className='signup'>
        <div className='img-signup' >
          <img src={img} alt="" />
        </div>
        <div className='content-box-signup'>

          <form className='sign-form' onSubmit={handlesubmit}>
          <div className="title">
          <h2>Create your Account</h2>
          </div>
            <input type="text"  placeholder='Username' onChange={fname} />
            <input type="password"  placeholder='Password' onChange={psw} />
            <input type="email"   placeholder='Email' onChange={mail} />
            <button className='btn-signup'  onClick={register}>Submit</button>
          </form>
        </div>
      </div>
    </div>)
}
export default Signup;