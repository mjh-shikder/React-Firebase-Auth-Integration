import React from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
     
   
    const authInfo = {
        user: 'ptatu@alu.vorta'
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
 * 6. set createUser in teh authInfo object to share via context 
 */