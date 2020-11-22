
import React from 'react';
import SideBar from './sidebar/sidebar_container';
import { Route } from "react-router-dom";
import Counter from './counter/counter_container';

const MainPage = () => {
    
    return (
        <div className='mainpage'>
            <SideBar />
            {/* <Counter /> */}
        </div>
    )
};

export default MainPage;
