
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import images from "./Images/login1.svg"
import './styles/login.css'


const Login = () => {
    const [username, setuser] = useState('')
    const [password, setPassword] = useState('');
    const [userdetails, setUserDetails] = useState(null);



    let handleLogin = ()=>{
                            axios.get("http://localhost:9091/user/login", { headers : { user: username , password : password } })
                            .then((response)=>{console.log(response.data); setUserDetails(response.data)})
                            .catch((error)=>{console.log(error);})
                        
                             console.log("login");
                          
                        }

                        let handleuser=(e)=>{
                            setuser(e.target.value); 
                            
                         }
                         let handlePsw=(e)=>{
                             setPassword(e.target.value);
                             
                         }
                         let handleSubmit=(e)=>{
                            console.log("submite");
                          e.preventDefault();}
      
    return ( 
        <>
        {userdetails==null && <div className="loginpage">
            <div className="login-img">
              <img src={images} alt="no image" />
            </div>
            <div className="login-contentBx">
            <form className="login-form" onSubmit={handleSubmit}>
            <h1>Login {username} {password} </h1>
                        <input type="email text" placeholder="Username" onChange={handleuser} value={username}/>
                        
                        <input type="placeholder" placeholder="Enter your password" onChange={handlePsw} value={password}/>
              
                        <input type="submit" className="btn-login" onClick={ handleLogin} value="Submit" />

                        <Link to="/forgot" className="forgotp"><h4>Forgot Password?</h4></Link>
                       
                        <div className="login-remember">
                           <span>Don't have an Account ? </span> <Link to="/signup"className="createaccount" href="">Create New Account</Link> 
                        </div>    
            </form>
            </div>
                        </div>}

        {userdetails!=null && <Home userdetails={userdetails} setUserDetails={setUserDetails}/>   }


        
        </>
     )
}
export default Login;