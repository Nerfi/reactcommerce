import React,{useState, useEffect, createContext} from 'react';
import firebase from '../../firebase/firebase';


const UserContext  = createContext();


const UserAuthContext = (props) => {

  const [user, setUser] = useState();


  const signUp = (email, password) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
    };

    const login = (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    };

  const logOutUser = () => firebase.auth().signOut();

  const resetPassword = (email) => {
    return firebase.auth().sendPasswordResetEmail(email);
  }


  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })

  },[user])


  const value = {
    user,
    login,
    signUp,
    logOutUser,
    resetPassword
  }
    return(
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    )

};

export { UserAuthContext, UserContext};
