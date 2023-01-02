import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from "./Components/Signup";


function App() {
  return (
      <Router>
          <div>
            <Switch>   
                <Route > <Signup /> </Route>  
            </Switch>
          </div>  
      </Router>
  );
}

export default App;
 
