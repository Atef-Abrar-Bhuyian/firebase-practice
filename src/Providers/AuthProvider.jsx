import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const name = "Potato Alu";

  //   User Create
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  useEffect(()=>{
    // get current user
     const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
        console.log("currentUser", currentUser);
        setUser(currentUser);
      })

      return()=>{
        unSubscribe();
      }
  },[]);

  const signOutUser = ()=>{
    return signOut(auth);
  }

  const authInfo = {
    name,
    createUser,
    loginUser,
    user,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
