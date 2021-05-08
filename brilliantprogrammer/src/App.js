import Nav from './components/nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Foot from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <Router basename={'/brilliantprogrammersite'}>
      <div className="App"> 
          <Nav/>
          <Switch>  
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
          <Foot/>
      </div>
    </Router>
  );
}

export default App;
