import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, passowrd) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passowrd )
    }
     
    const signInUser = (email, passowrd) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passowrd )
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider )
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    // // Get current user info 
    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('inside observer: if', currentUser);
    //     }
    //     else {
    //         console.log('inside observer: else', currentUser);
            
    //     }
    // })

    // useEffect(()=>{}, [])
    // useEffect(() => {
    //     // step 1: observer set
    //     // setp 2: set in a variable 
    //     // setp 3: return and call teh variable so that youu can clear the reference
    // }, [])
    
    useEffect(() => {
        // set the observer 
        const unsubsccribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in austh state change', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        // clear the observer on unmount 
        return () => {
            unsubsccribe();
        }
    }, [])
    
    
   
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
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