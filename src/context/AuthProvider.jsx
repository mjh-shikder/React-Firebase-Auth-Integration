import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const AuthProvider = ({ children }) => {


    const createUser = (email, passowrd) => {

        return createUserWithEmailAndPassword(auth, email, passowrd )
    }
     
    const signInUser = (email, passowrd) => {
        return signInWithEmailAndPassword(auth, email, passowrd )
    }
    // Get current user info 
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('inside observer: if', currentUser);
        }
        else {
            console.log('inside observer: else', currentUser);
            
        }
    })

   
    const authInfo = {
        createUser,
        signInUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;


/**
 * 1. create a context and export
 * 2. create3 a provider -- so that you can resue the context in different places
 * 3. ensure you use the children prop
 * 4. make sure use the auth provider in the router 
 * 5. make the create user with email and password shared via provider 
 * 6. set createUser in the authInfo object to share via context 
 */