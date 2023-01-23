import {useRef, useState} from "react";
import { useHistory, useParams} from "react-router-dom";
// import {Link} from "react-router-dom";
import images from "./Images/forgot-img.webp";
//import Login from "./Login";

const Setnewpassword = () => {
    let newpassword = useRef();
    let confirmnewpassword = useRef();
    let {uemail}=useParams();
    let [errnewpassword, setErrnewpassword] = useState();

    let history = useHistory();

    let handleresetpassword = (e)=>{
        e.preventDefault();
        console.log(newpassword.current.value);
        if(newpassword.current.value===confirmnewpassword.current.value)
          {
                console.log("handleresetpassword executed");
                fetch("http://localhost:9091/user/setnewpassword", 
                      {method:"POST", 
                      headers:{newpassword:newpassword.current.value,email:uemail , 
                      "Content-Type":"application/json" }
                      })
              .then((y)=>{
                if(y.ok==true)
                {
                  console.log(y.ok);
                  console.log("redirected to  login page")
                  history.push("/");
                }
                else{
                    setErrnewpassword("Password doesn't matched.......!!!!")
                }
            }
            )
          }}

    return ( 
            <>
                <div className="setnewpassword">
                  <div className="setnewpassword-img">
                      <img src={images} alt="no image" width="100%" height="80%"/>
                  </div>  
                  <div className="setnewpassword-box">
                      <form  onSubmit={handleresetpassword} className="form-setnewpassword">
                        <h2>Set new password</h2>
                        <input type="text" ref={newpassword} placeholder="Enter new password"/><br/>
                        <input type="password" ref={confirmnewpassword} placeholder="Confirm New password" />
                          <br/> 
                        {/* <input type="submit" name="setnewpasswordsubmitbutton"/> */}
                        <button className="btn-setnewpassword">Submit</button>

                      </form>
                  </div>
                </div>
            </>
        )
  }

export default Setnewpassword;


