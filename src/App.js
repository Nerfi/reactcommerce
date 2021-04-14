import './App.css';
import NavBar from './components/UI/Navbar';
import LandingPage from './components/UI/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/UI/Footer';
import {CommerceContext} from './components/commerce/commerce';
import SingleItem from './components/UI/SingleItem';
import {UserAuthContext}  from  './components/AuthContext/AuthContext';
import Login from './components/UI/Login';
import SignUp from './components/UI/SignUp';
import ResetPassword from './components/UI/ResetPassword';
import UpdateUserData from './components/UI/UpdateUserData';


function App() {
  return (
   <>
   <Router>
   <UserAuthContext>
   <CommerceContext>
     <NavBar/>

      <Switch>
      <Route exact path="/" component={LandingPage}></Route>
     <Route  path="/item/:id" component={SingleItem}></Route>
     <Route  path="/login" component={Login}></Route>
     <Route  path="/signup" component={SignUp}></Route>
     <Route  path="/reset/password" component={ResetPassword}></Route>
   {/* this route needs to be protected */}
      <Route  path="/update/user" component={UpdateUserData}></Route>



      </Switch>
    </CommerceContext>
    </UserAuthContext>
   </Router>
  <Footer/>

   </>
  );
}

export default App;
