import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Forgotpassword from './Components/Forgotpassword'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Dashboard/Navbar'
import Otpforgetpassword from './Components/Otpforgetpassword'
import Setnewpassword from './Components/Setnewpassword'

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route path="/forgot"><Forgotpassword /></Route>
        <Route path="/Signup"><Signup/></Route>
        <Route path="/Otpforgetpassword:uemail"> <Otpforgetpassword /> </Route>
        <Route path="/newpassword:uemail"> <Setnewpassword /> </Route>
        <Route exact path="/home"><Home/></Route>
        {/* <Route exact path="/"> <Navbar /> </Route> */}

      </Switch>
    </div>
  </Router>
  )
}

export default App
