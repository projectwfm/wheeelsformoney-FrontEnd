import React, { useState } from 'react'
import './styles/Signup.css';
// import img from './Images/imgSignup.webp'; 
import backImg from './Images/arrow_back.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const SignupPg2 = () => {

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phno, setPhno]= useState("");
  let [dob, setDob]= useState("");
  let [gender, setGender]= useState("");
  let [doorno, setDoorno] = useState("");
  let [street, setStreet] = useState("");
  let [area, setArea] = useState("");
  let [city, setCity]= useState("");
  let [state, setState]= useState("");
  let [country, setCountry]= useState("");
  let [pincode, setPincode]= useState("");
  let [] = useState("");


  let [error, setError]= useState("");
  let [submitted, setSubmitted] = useState("");

  let history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  const handleEmail =(e) =>{
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handlePhone =(e)=> {
    setPhno(e.target.value);
    setSubmitted(false);
  };

  const handleDob =(e)=> {
    setDob(e.target.value);
    setSubmitted(false);
  };

  const handleGnder =(e)=> {
    setGender(e.target.value);
    setSubmitted(false);
  };

  const handleDoor=(e)=> {
    setDoorno(e.target.value);
    setSubmitted(false);
  };

  const handleStreet=(e)=> {
    setStreet(e.target.value);
    setSubmitted(false);
  };

  const handleArea=(e)=> {
    setArea(e.target.value);
    setSubmitted(false);
  };

  const handleCity =(e)=> {
    setCity(e.target.value);
    setSubmitted(false);
  };

  const handleState =(e)=> {
    setState(e.target.value);
    setSubmitted(false);
  };

  const handleCountry =(e)=> {
    setCountry(e.target.value);
    setSubmitted(false);
  };

  const handlePincode =(e)=> {
    setPincode(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {username,email,password,dob,gender,phno,address:{country,city,state,pincode,address1:{area,street,doorno}}};
    console.log(user);
    fetch("http://localhost:9091/user/signUp",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user),
    })
    .then((res)=>{
      console.log(res);
      alert("done")
      history.push("/");
    })
    .catch((er)=>{console.log(er.message);})


    if(username === '' || email === '' || password === '' ||
      phno === '' || dob === '' || gender === '' ||  doorno === '' || street === '' || area === '' || city === '' || state === '' || 
      country === '' || pincode === '') 
        {
          setError(true);
        }
         else {
          setSubmitted(true);
           setError(false);
        }
  };

  const successMessage =() => {
    return(
      <div className='success' style={{ display: submitted ? '' : 'none', }}>
          <p style={{color: "green"}}>User successfully registered!!</p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none', }}>
        <p style={{color: "red"}}>Please enter all the fields</p>
      </div>
    );
  };
  
  return (
    // <div className='signup'>
    //   {/* <div className='img-signup' >
    //     <img src={img} alt="" />
    //   </div> */}
      
    // </div>
    <div className='SignupPg2'>
          {<div className="sign-form2">
            <div className='arrow-img'>
              {/* <Link to="/signup"><img src={backImg} alt="" height="40px" width="40px" id='back-ing' /> </Link> */}
              <h2>Create your Account</h2>
            </div>  
            <div className="messages">
                   {errorMessage()}
                   {successMessage()}
            </div>
            <form className='form2' onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={handleUsername} value={username} required />
                
                <input type="email" placeholder='Email-id' onChange={handleEmail} value={email} required />

                <input type="password" placeholder='Password' onChange={handlePassword} value={password}required  />

                <input className="tel" type="tel"  placeholder='Phone no.' maxlength="10" style={{width:250}}  onChange={handlePhone} value={phno} required />
                 
                <input type="date" style={{width:250}} onChange={handleDob} value={dob} required  />
                  
                <div className='class-gender'>
                  <label htmlFor="">Gender: </label>
                   <div className='label-inp'>
                     <label>Male</label> <input type="radio" value="Male" name="gender" onClick={(e)=>{setGender(e.target.value)}} required/> 
                     <label>Female</label> <input type="radio" value="Female" name="gender" onClick={(e)=>{setGender(e.target.value)}} /> 
                     <label>Other</label> <input type="radio"  value="Other" name="gender" onClick={(e)=>{setGender(e.target.value)}}/>
                    </div>
                </div>

                <div className='class-address'>
                  <label htmlFor="">Address</label>
                  <div className='address-inp'>
                      <input type="text"  placeholder='Door no.' onChange={handleDoor} value={doorno} required />
                      <input type="text"  placeholder='Street' onChange={handleStreet} value={street} required /> 
                      <input type="text"  placeholder='Area' onChange={handleArea} value={area} required />
                      <input type="text"  placeholder='City' onChange={handleCity} value={city} required  />
                      <input type="text"  placeholder='State' onChange={handleState} value={state} required  />
                      <input type="text"  placeholder='Country' onChange={handleCountry} value={country} required  />
                      <input type="text"  placeholder='Pincode' maxlength="06" onChange={handlePincode} value={pincode} required  />
                   </div>
                </div>
                <div className='class-goback'>
                  <button className='btn-signup'> Submit </button>
                </div>
                <p> <span>Already have an account ?</span><Link to="/"> Sign in</Link></p> 
            </form>
          </div>}
    </div>
    
    )
}

export default SignupPg2

// rajangupta0495@gmail.com
