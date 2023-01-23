import {useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import Setnewpassword from "./Setnewpassword";

const Otpforgetpassword = ({otpreceivedfromserver}) => {

   let history= useHistory();
   let {uemail}=useParams();
   console.log(uemail);

   let [otpreceivedfromuser, setOtpreceivedfromuser] = useState("");    
   let verifying=(e)=>{
      e.preventDefault();
      fetch("http://localhost:9091/user/verifyotp", 
                                 {method: "POST", 
                                 headers : {email:uemail, otp:otpreceivedfromuser}
                                 })
                  .then((response)=>{
                     if(response.ok===true)
                     {
                     console.log(uemail);
                        history.push(`/newpassword${uemail}`)            
                     }
                      else{
                        alert("Check your otp please!");
                        }
                   })
   }

   return (
      <>
         <div className="forget-otp">  
            <h4 align="center">Please enter the OTP sent to registered email</h4>                  
            <div className="otpdigit">
               <form onSubmit={verifying}>
                  <input type="text" maxLength="6" onChange={(e)=>{setOtpreceivedfromuser(otpreceivedfromuser+e.target.value)}}/>
                  
                  <br/><br/> 
                  {/* <input type="submit" className="otp-submit"/> */}
                  <button className="otp-submit">Submit</button>
               </form>
            </div>              
         </div>
      </>
     )
   }
 
export default Otpforgetpassword ;

