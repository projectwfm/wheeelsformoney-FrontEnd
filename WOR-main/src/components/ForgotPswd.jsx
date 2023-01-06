import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/ForgotPswd.css'

function ForgotPswd() {
  let [toggle, setToggle] = useState(true);
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  let handleState=() =>
   {
    setToggle(!toggle);
  }
  window.history.forward();
  function noBack()
  {
    window.history.forward();
  }
  return (
    <div>
      <div className="container">
        <div className="myDiv1"></div>
        <div className="myDiv2">
        {toggle ? (
          <div className="fwrap1">
            <span className="s1">Forgot Password</span>
            <span className="s2">Enter your email address</span>
            <form className="form_1" onSubmit={handleSubmit}>
              <input type="text" placeholder="UserName/MailId" />
             <input type="submit" onClick={()=>{handleState();noBack()}}value="Continue" />
            </form>
          </div>
        ) : (
          <div className="fwrap2">
            <span className="s1">Reset Password</span>
            <form className="form_2">
              <input type="text" placeholder="UserName/MailId" />
              <input type="password" placeholder="New Password" />
              <input type="text" placeholder="Confirm Password" />
             <Link to="/Login"> <input type="submit" value="Submit" /></Link>
            </form>
          </div>
        )}
      </div>
      </div> 
    </div>
  );
}

export default ForgotPswd;