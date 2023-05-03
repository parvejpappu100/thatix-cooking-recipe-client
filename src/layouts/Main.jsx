import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className='lg:container mx-auto text-2xl text-center my-5'>{navigation.state === "loading" && <progress className="progress w-56"></progress>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;