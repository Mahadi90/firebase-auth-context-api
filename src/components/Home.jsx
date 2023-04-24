import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';


const Home = () => {

   const user = useContext(AuthContext)

    return (
        <div>
            <h2>This is home section {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;