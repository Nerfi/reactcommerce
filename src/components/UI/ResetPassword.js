import React, {useState, useContext} from 'react';
import './ResetPassword.css';
import {UserContext} from '../AuthContext/AuthContext';
import { Alert } from '@material-ui/lab';


const ResetPassword = () => {

  const [error, setError] = useState(null)
  const [message, setMessage] = useState("")
  const [email, setNewEmail] = useState('');
  const { resetPassword} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage('');
      setError('')
      await resetPassword(email)
      setMessage('Check your inbox for further steps')
    }catch(e) {
      setError(e.message)
    }
  };


  return(
    <>
    <div className="formPassword">
      <h3 className="reset">Reset Your Password</h3>
      {error && <Alert severity="warning">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}
    <form onSubmit={handleSubmit} className="resetForm">
          <label> Email</label>
          <input type="email" placeholder="Email to send you link" onChange={(e) => setNewEmail(e.target.value)}/>
          <button type="submit">Reset Password</button>
        </form>
    </div>
    </>
  )
};

export default ResetPassword;
