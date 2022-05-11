import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;