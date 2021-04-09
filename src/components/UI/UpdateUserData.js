import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../AuthContext/AuthContext';
import './UpdateUserData.css';


const UpdateUserData = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');
const [error, setError] = useState(null);
const [name, setName] = useState('');
const history = useHistory();

const {
  updateEmail,
  user ,
  updatePassword,
 updateUserName
} = useContext(UserContext);

console.log({user})


//const new function in order to update the user data
//this is not an async function because we are resolving all the promises this component has in one place , Promise.all(promises); check docs for more info
const handleUserUpdate = (e) => {

  e.preventDefault();


  if(password !== repeatPassword) {

    setError('Password do not match');
    setPassword('');
    setRepeatPassword('');
  }

  //creating promises array in order to run all Promises at once
  const promises = [];


  if(email !== user.email) {
    promises.push(updateEmail(email))
  }

  if(password ) {
    promises.push(updatePassword(password))
  }
  if(name !== user.displayName ) {
    promises.push(updateUserName(name))
  }


  //resolving all the promises at once
  Promise.all(promises).then(() => {
    if(!error) alert('no errors found')
    history.push("/");

  }).catch((error) => {
    setError('Failed to update profile' + ' ' + error.message)
    setName('')
    setPassword('');
    setRepeatPassword('');
  })

};

  return(
     <>
     <div className="updateForm">
     <h3 className="updateFormTitle">Update your data </h3>
        <form onSubmit={handleUserUpdate} className="updateUserForm">
        <label>name</label>
          <input type="text" placeholder="name" required onChange={(e) => setName(e.target.value)}/>
          <label >Email</label>
          <input type="email" placeholder="user.email?" onChange={(e) => setEmail(e.target.value)} required/>
          <label> Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="leave blank to keep the same"/>
          <label>Repeat Password</label>
          <input type="password" onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Leave blank to keep the same"/>
          <button type="submit" disable={!user}>Update</button>
        </form>
     </div>
    </>

  )
};


export default UpdateUserData;
