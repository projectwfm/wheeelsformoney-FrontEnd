import React, { useState } from "react";
import forgotimg from "./Images/forgot-img.webp";
import { useHistory} from 'react-router-dom';
//import Otpforgetpassword from './Otpforgetpassword';
import './styles/Forgot.css'


const Forgotpassword = () => {

    let history = useHistory();
    let [uemail, setUemail] = useState("");
    // let [otpreceivedfromserver, setOtpreceivedfromserver] = useState(null);
    console.log("after enter"+uemail);
    let handleresetpassword = (e)=>{
        e.preventDefault();
        console.log("handleresetpassword");
        fetch("http://localhost:9091/user/sendotp", {method: "GET", headers :{email:uemail, type:"forget"}})
        .then( (x) =>{
            if( x.ok==true)
            {
                console.log(x.ok);
                history.push(`/otpforgetpassword${uemail}`)
            }
            else{
                alert("Check your email ID!");
            }
        })
    }

    return (
        <>
            <div className="forget">
                <div className="forgot_img">
                    <img src={forgotimg} alt="" width="450px" height="450px"/>
                </div>
                <div className="forget-box">
                    <div className="forget-header">
                       <h1>Forgot Password</h1>
                    </div>
                    <div className="paragraph">
                        <p>Enter your email assoicated with user account</p>
                    </div>
                    <div className="forget-form">
                        <form  onSubmit={handleresetpassword}>
                            <input type="email" placeholder="Enter your Email" value={uemail} onChange={(e)=>{setUemail(e.target.value)}}/>
                            {/* <input type="submit" className="" name="Next" value="Next"/> */}
                            <button className="fgt-next">Next</button>
                        </form>
                    </div>
                </div>   
            </div>
        </>
    );
}
 
export default Forgotpassword;

// guptasudhanshu548@gmail.com



























/* import React, {useState} from "react";
import './styles/Forgot.css';
import forgotimg from "./Images/forgot-img.jpg";
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
function Forgot()
{

     const [mailid, setMailid] = useState('');
     const [successMsg, setSuccessMsg] = useState('');
    const [users,setUsers]=useState(null);

  
  const [mailidErr, setmailidErr] = useState('');

        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let history = useHistory();

        let handleLogin = ()=>
        {
            let user=fetch("http://localhost:9091/user/psdreset",{method:"GET", headers : { email: mailid } });
            user.then((resolve)=>{return resolve.json()})
            .then((gitusers)=>
            {
                console.log(gitusers);
                setUsers(gitusers)
                history.push("/otp");
            }).catch((error)=>
            {
                console.log(error);
            },[])   
        }


        let handleSuccessMsg = () => {
            if (mailid.match(mailRegex)) {
               
                    setSuccessMsg("");
                    alert("Login Successful");
                }
        
            else {
                alert("Login Unsuccessfull");
            }
        }


        /* 

   let handlesubmit=(e)=>{
    e.preventDefault()
           console.log(email);
            axios.post(`http://localhost:9091/user/resetpswd?data=email=${email}`)
            .then(()=>{
             alert("sucess");
             history.push("/otp")
           })
           .catch((error)=>{console.log(error);})
    }
 */
                  
 /*    const handlemailidChange = (e) => {
      setSuccessMsg('');
      setmailidErr('');
      setMailid(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if (mailid !== '') 
    {

        if (mailRegex.test(mailid)) 
        {
            setmailidErr('');
        }
        else {
            setmailidErr("Enter valid Email id");
        }
    }
    else 
    {
        setmailidErr("Email required");
    }
    handleLogin();

  }
    return (
      <div>
        {users==null && <div className="maindiv">
    <div className='forgotpage' >
                <div className="forgot-img">
                  <img src={forgotimg} alt="" />
                </div>
                 <div className='contentBx-forgot' >
                     <form className="forgot-form" onSubmit={handleSubmit}>
                     <h2>Forgot password</h2>
                        <input type="email" placeholder="Enter your Email / Username" onChange={handlemailidChange} value={mailid} />
                        {mailidErr && <div className="error-msg">{mailidErr}</div>} 
                        <br/>

                        <input type="submit" className="btn-login"   value="Submit" />
                         <Link to="/otp" className="enterotp" ><h1>Please enter four-digits code send to your emailId</h1> </Link>  
                            
        
                        <hr />
                     <br/>
                     <br/>
                     <br/>   
      
                   </form>
                 </div>        
        </div>
        </div>
 }
 </div> 
    )
 
}
export default Forgot;
 */









































/* import React, { useState } from 'react';
import './styles/Forgot.css';
import forgotimg from "./Images/forgot-img.jpg"
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Forgot() {


    let [email,setemail] = useState("");
    let [emailErr,setemailErr]=useState("");
    let [newpass,setnewpass]=useState("");
    let [repass,setrepass]=useState("");
    let [match,setMatch]=useState(false);
   let history= useHistory();


    
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   let handlerepass =(e)=>{
    setrepass(e.target.value)
    if(newpass == e.target.value )
    {
      setMatch(true);
    }
    else
    {
      setMatch(false);
    }

  }

   let handlesubmit=(e)=>{
   e.preventDefault()
          console.log(email , newpass);
           axios.post(`http://localhost:9091/user/resetpswd?data=${email}&newpass=${newpass}`)
           .then(()=>{
            alert("sucess");
            history.push("/")
          })
  
   }

    return (
        <div className='forgotpage' >
                  <div className="forgot-img">
                    <img src={forgotimg} alt="" />
                  </div>
                   <div className='contentBx-forgot' >
                    <form className='forgot-form' onSubmit={handlesubmit} >

                       <h2>Forgot password</h2>
                       <input type="email" placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
                       <input type="password" placeholder='password' onChange={(e)=>setnewpass(e.target.value)} />
                       <input type="text" placeholder='re-enter password' onChange={handlerepass} />
                       { match==true && repass.length>0 && <font color="green"> correct password </font> }
                       { match==false && repass.length>0 && <font color="red"> in-correct password </font> }

                      {emailErr && <div className="error-msg">{emailErr}</div>}       
                      <button  className='btn-fogot'>Submit</button>
                   </form>
                 </div>        
        </div>
    )
}

export default Forgot
 */






































/* 
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "./Images/login1.svg"


const Login = () => {
    const [mailid, setMailid] = useState('')
    const [password, setPassword] = useState('')
    const [mailidErr, setmailidErr] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [successMsg, setSuccessMsg] = useState('')
    const [users,setUsers]=useState(null)
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const pwdRegex = /^(?=.*[a-z]*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;


    let handleLogin = ()=>
                        {
                            
                            let user=fetch("http://localhost:9091/user/login",{method:"GET", headers : { user: mailid , password : password }    });
                            user.then((resolve)=>{return resolve.json()})
                            .then((gitusers)=>
                            {
                                console.log(gitusers);
                                setUsers(gitusers)
                            }).catch((error)=>
                            {
                                console.log(error);
                            },[])   
                        }
                        
    const handlemailidChange = (e) => {
        setSuccessMsg('');
        setmailidErr('');
        setMailid(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setSuccessMsg('');
        setPwdError('');
        setPassword(e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        if (mailid !== '') 
        {

            if (mailRegex.test(mailid)) 
            {
                setmailidErr('');
            }
            else {
                setmailidErr("Enter valid Email id");
            }
        }
        else 
        {
            setmailidErr("Email required");
        }

        if (password !== '') {
            if (pwdRegex.test(password)) {
                setPassword('');
            }
            else {
                setPwdError("Password must be minimum 8 characters with atleast one uppercase letter, one lower case letter,one special character and one numeric type")
            }
        }
        else {
            setPwdError("password required");
        }

        handleLogin();


    }
    let handleSuccessMsg = () => {
        if (mailid.match(mailRegex)) {
            if (password.match(pwdRegex)) {
                setSuccessMsg("");
                alert("Login Successful");
            }
        }
        else {
            alert("Login Unsuccessfull")
        }}
    return ( 
        <div>
            {users==null && <div className="maindiv">
            
            <div className="imgbx">
          {/* <h1>Wheels for Money</h1> */
          /*   <img src={images} alt="no image" />
            </div>
            <div className="contentbox">
            <div className="sample">
                <h3> Login</h3>
            <form className="form" onSubmit={handleSubmit}>
                        <input type="email text" placeholder="Enter your Email / Username" onChange={handlemailidChange} value={mailid} />
                        {mailidErr && <div className="error-msg">{mailidErr}</div>} 
                        <input type="placeholder" placeholder="Enter your password" onChange={handlePasswordChange} value={password} />
                        {pwdError && <div className="error-msg">{pwdError}</div>} 
                        <Link to="/forgotpassword" className="forgotp">Forgot Password?</Link>
                        <input type="submit" value="Submit" />
                        <hr />
                        <span>Don't have an Account ? </span> <Link to="/forgot" className="createaccount" href="">Create New Account</Link>
            </form>
            </div>
        </div>
           
                            </div>}


            {users &&     <div className="dashboard">
                                <h1> this is s  dashboard</h1>
                        </div>}


        </div>
    );
}
export default Login; */  