import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {

    const authInfo = use(AuthContext)
    
    console.log(authInfo);
    


    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-green-700 my-24'> Home Page</h1>
        </div>
    );
};

export default Home;