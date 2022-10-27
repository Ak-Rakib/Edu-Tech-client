import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthProvider = createContext();

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const logInWithGoogle = (Provider)=> {
        return signInWithPopup(auth, Provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
        })
        return ()=> {
            unsubscribe();
        }
    },[]);

    const Info = {user, logInWithGoogle}
    return (
        <div>
            <AuthProvider.Provider value={Info}>
             {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default ContextProvider;