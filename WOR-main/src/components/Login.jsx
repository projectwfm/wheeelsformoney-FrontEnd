import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
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


    // let user=()=>{
    //     axios.get("http://localhost:9091/user/login",
    //     {
            
    //     }).then((response)=>{console.log(response)})
    // }
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
          {/* <h1>Wheels for Money</h1> */}
            <img src={images} alt="no image" />
            </div>
            <div className="contentbox">
            <div className="sample">
                <h3> Login</h3>
            <form className="form" onSubmit={handleSubmit}>
                        <input type="email text" placeholder="Enter your Email / Username" onChange={handlemailidChange} value={mailid} />
                        {mailidErr && <div className="error-msg">{mailidErr}</div>} 
                        <input type="placeholder" placeholder="Enter your password" onChange={handlePasswordChange} value={password} />
                        {pwdError && <div className="error-msg">{pwdError}</div>} 
                        <Link to="/forgot" className="forgotp">Forgot Password?</Link>
                        <input type="submit" value="Submit" />
                        <hr />         
            </form>
            <span>Don't have an Account ? </span>      <Link to="/signup"className="createaccount" href="">Create New Account</Link>
            </div>
        </div>
           
                            </div>}


                           


        </div>
    );
}
export default Login;

