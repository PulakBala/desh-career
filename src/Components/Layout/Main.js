import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <div>
           <Outlet></Outlet>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;