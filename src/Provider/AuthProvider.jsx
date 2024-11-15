import { createContext } from "react";

export const authContext = createContext(null)


const AuthProvider = ({children}) => {

    const authInfo = {
        name: 'Inaya Adib'
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
