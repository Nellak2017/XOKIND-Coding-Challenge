import React, { useEffect, useState } from 'react';
import app, { auth } from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    // Stores the Current user we get from firebase
    const [currentUser, setCurrentUser] = useState(null);

    // When AuthProvider is mounted, setCurrentUser when the user is authenticated
    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    },[])
    
    // Context API allows all of App to have access to variables
    // It is similar to redux, but has the drawback of less debugability.
    return ( 
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;