import './App.css';
import NavBar from './components/UI/Navbar';
import LandingPage from './components/UI/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/UI/Footer';

function App() {
  return (
   <>
   <Router>
     <NavBar/>
      <Switch>
      <Route path="/" component={LandingPage}></Route>

      </Switch>
      <Footer/>
   </Router>

   </>
  );
}

export default App;
