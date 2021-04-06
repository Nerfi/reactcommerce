import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import './Login.css';
import {UserContext} from '../AuthContext/AuthContext'
import firebase from '../../firebase/firebase';

const LoginComponent = () => {

  const [email, setEmial] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {login, resetPassword} = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //creating logic
    try {
       const successLogin = await login(email, password)
       history.push("/")

    }catch(e) {
      setError(e.message);
    }

}





  return(
    <>
    <div className="form">
    {error && <p className="errorMessage">{error}</p> }
    <h3 className="loginTitle">Login</h3>
       <form className="formContent" onSubmit={handleSubmit}>
       <input type="email" placeholder="email" required onChange={(e) => setEmial(e.target.value)}/>
       <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
       <button type="submit">Submit</button>
       <a href="/reset/password">Forgot Paswword ?</a>
      </form>
    </div>

    </>
  )

};


export default LoginComponent;
