import React,{useState, useContext} from 'react';
import './SignUp.css';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../AuthContext/AuthContext'
import firebase from '../../firebase/firebase';


const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  //context
  const {signUp} = useContext(UserContext);



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return setError('There is no name, please select one');

    if(password !== repeatPassword) {
      return setError('Passwords do not match!')
    }

    try {
      setError(null)

    }catch(e) {
      setError(e.message)
    }
  }



  return(
    <>
    <div className="signupComponent">
    <h3 className="signUpTitle">Sign Up</h3>
    {error && <p>{error}</p>}
    <form className="formControl" onSubmit={handleSubmit}>
     <label className="label" required>Name</label>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <label className="label">Email</label>
      <input type="email" placeholder="Email"/>
      <label className="label" >Password</label>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <label className="label" onChange={(e) => setRepeatPassword(e.target.value)} >Repeat Password</label>
      <input type="password" placeholder="Repeat password" />
      <button type="submit">Register</button>
    </form>

    </div>
    </>
  )
};


export default SignUp;
