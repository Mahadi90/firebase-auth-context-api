import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

   const logout = () => {
    return signOut(auth)
   }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('on auth state change', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])
  
    const authInfo = {
        user,
        createUser,
        userSignIn,
        logout
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;