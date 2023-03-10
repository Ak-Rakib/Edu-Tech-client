import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthProvider = createContext();

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);

    const logInWithGoogle = (Provider)=> {
        setLoad(true);
        return signInWithPopup(auth, Provider);
    }

    const signUp =(email, password) => {
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoad(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userUpdateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoad(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
              console.log('user details:', currentUser);
              setUser(currentUser);
              setLoad(false);
        })
        return ()=> {
            unsubscribe();
        }
    },[]);

    const Info = {
        user,
        load,
        logInWithGoogle, 
        signUp, 
        signIn, 
        logOut,
        userUpdateProfile
    }

    return (
        <div>
            <AuthProvider.Provider value={Info}>
             {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default ContextProvider;