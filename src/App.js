import './App.css';
import NavBar from './components/UI/Navbar';
import LandingPage from './components/UI/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/UI/Footer';
import {CommerceContext} from './components/commerce/commerce';

function App() {
  return (
   <>
   <Router>
   <CommerceContext>

     <NavBar/>
      <Switch>
      <Route path="/" component={LandingPage}></Route>

      </Switch>
      <Footer/>
    </CommerceContext>
   </Router>

   </>
  );
}

export default App;
