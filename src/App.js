import './App.css';
import NavBar from './components/UI/Navbar';
import LandingPage from './components/UI/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/UI/Footer';
import {CommerceContext} from './components/commerce/commerce';
import SingleItem from './components/UI/SingleItem';
import AuthContext  from  './components/AuthContext/AuthContext';

function App() {
  return (
   <>
   <Router>
   <AuthContext>
     <NavBar/>
   <CommerceContext>

      <Switch>
      <Route exact path="/" component={LandingPage}></Route>
     <Route  path="/item/:id" component={SingleItem}></Route>


      </Switch>
    </CommerceContext>
    </AuthContext>
   </Router>
  <Footer/>

   </>
  );
}

export default App;
