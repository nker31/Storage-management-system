import React, {useEffect, useState} from "react";
import firebaseConfig from "../config";
 
export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser,setCurrentUser] = useState(null);

    function updatePassword(password) {
        return currentUser.updatePassword(password)
      }

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
    }, [])
    const value = {
        currentUser,
        updatePassword
    }

    if (loading) {
        return <p>Loading. . .</p>
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}