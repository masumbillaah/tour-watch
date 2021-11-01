import React from 'react';
import About from '../../About Us/About';

import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <About></About>
            
        </div>
    );
};

export default Home;