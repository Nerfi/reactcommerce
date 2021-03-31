import React,{useState, useEffect, createContext} from 'react';
import firebase from '../../firebase/firebase';


const UserContext  = createContext();


const UserAuthContext = (props) => {

  const [user, setUser] = useState();

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })

  },[user])


  const value = {
    user
  }
    return(
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    )

};

export default UserAuthContext;
