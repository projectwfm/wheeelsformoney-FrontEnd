import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from "./Components/Signup";


function App() {
  return (
      <Router>
          <div>
            <Switch>   
                <Route > <Signup /> 
                <h1>hello world</h1>
                </Route>  
            </Switch>
          </div>  
      </Router>
  );
}

export default App;
 
