import './App.css';
import NavBar from './components/UI/Navbar';
import LandingPage from './components/UI/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/UI/Footer';
import {CommerceContext} from './components/commerce/commerce';
import SingleItem from './components/UI/SingleItem';
import {UserAuthContext}  from  './components/AuthContext/AuthContext';
import Login from './components/UI/Login';

function App() {
  return (
   <>
   <Router>
   <UserAuthContext>
     <NavBar/>
   <CommerceContext>

      <Switch>
      <Route exact path="/" component={LandingPage}></Route>
     <Route  path="/item/:id" component={SingleItem}></Route>
     <Route  path="/login" component={Login}></Route>



      </Switch>
    </CommerceContext>
    </UserAuthContext>
   </Router>
  <Footer/>

   </>
  );
}

export default App;
