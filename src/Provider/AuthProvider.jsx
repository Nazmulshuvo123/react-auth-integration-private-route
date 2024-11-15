import {createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
  const name = "Inaya Adib";
 
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
    
  }

  const signOutUser = () =>{
    return signOut(auth)
  }

  useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
      console.log("Current User",currentUser);
      setUser(currentUser)
    })

    return () =>{
      unSubscribe();
    }
  },[])

  // onAuthStateChanged(auth, currentUser =>{
  //   if(currentUser){
  //     console.log("Login current user", currentUser);
  //     setUser(currentUser)
  //   }
  //   else{
  //     console.log("No user login")
  //     setUser(null)
  //   }
  // })
  


  const authInfo = {
    name, 
    user,
    createUser,
    signInUser,
    signOutUser 
    
    
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
