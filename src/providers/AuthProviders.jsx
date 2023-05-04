import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user , setUser] = useState(null);
    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email , password)
    }

    const restPassword = email =>{
        return sendPasswordResetEmail(auth , email);
    }

    const googleSingIn = () =>{
        return signInWithPopup(auth , googleProvider)
    }

    const gitHubSingIn = () =>{
        return signInWithPopup(auth , githubProvider)
    }
    

    const userSingOut = () =>{
         return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , loggedUser =>{
            setUser(loggedUser)
        })
        return () =>{
            unsubscribe();
        }
    } , [])

    const authInfo = {
        user,
        createUser,
        singIn,
        restPassword,
        googleSingIn,
        gitHubSingIn,
        setUser,
        userSingOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;