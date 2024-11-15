import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase.init";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = "Inaya Adib";
 
  const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("Currently logged in", currentUser);
      setUser(currentUser)
    } else {
      console.log("No user logged in");
      setUser(null)
    }
  });

  const authInfo = {
    name,
    user,
    createUser,
    signInUser,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
