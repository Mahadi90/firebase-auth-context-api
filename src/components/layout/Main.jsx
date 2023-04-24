import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';

const Main = () => {
    return (
        <div>
             <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;