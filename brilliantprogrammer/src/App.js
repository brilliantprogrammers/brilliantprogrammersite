import Nav from './components/nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Foot from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}> 
        <Nav/>
        <Switch>  
          <Route path="/">
            <Home/>    
          </Route>
          <Route path="/python">
            
          </Route>
        </Switch>
        <Foot/>
      </Router>
    </div>
  );
}

export default App;
