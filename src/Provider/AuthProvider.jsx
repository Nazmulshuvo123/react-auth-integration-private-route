
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";


export const authContext = createContext(null)

const createUser = (email, password) =>{
    
  return  createUserWithEmailAndPassword(auth, email, password)
}

const AuthProvider = ({children}) => {
const  name = 'Inaya Adib';
    const authInfo = {
       name,
       createUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
