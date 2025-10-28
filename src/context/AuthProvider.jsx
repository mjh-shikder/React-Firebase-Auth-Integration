import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const authInfo = {
        email: 'alu@vorta.com',
        user: 'jigi'
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;