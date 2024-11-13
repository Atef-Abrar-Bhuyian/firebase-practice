import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const name = "Potato Alu";

  //   User Create
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Login
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign in with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in With Github
  const githubSignIn = () =>{
    return signInWithPopup(auth, githubProvider);
  }

  useEffect(() => {
    // get current user
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser);
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // Sign out
  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    name,
    createUser,
    loginUser,
    user,
    signOutUser,
    loader,
    googleSignIn,
    githubSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
