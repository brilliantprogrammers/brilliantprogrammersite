import Nav from './components/nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route path="/home">
            <Nav/>
          </Route>
          <Route path="/about">
            
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
