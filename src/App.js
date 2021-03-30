
import Navbar from './components/navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Cohort from './pages/Cohort'; 
import Update from './pages/Update';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {


  return (
    <Router>
      <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/create' component={Create} />
      <Route path='/cohort' component={Cohort} />
      <Route path='/update' component={Update} />
    </Switch>
    </Router>
  );
}

export default App;
