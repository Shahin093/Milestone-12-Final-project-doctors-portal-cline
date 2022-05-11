import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'
const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard img={clock} bgcolor="text-white font-bold bg-gradient-to-r from-secondary to-primary" heding='Opening House' otherText="Opening house is very large in lagest inventory "></InfoCard>
            <InfoCard img={marker} bgcolor="bg-accent" heding='Our Location ' otherText="Opening house is very large in lagest inventory "></InfoCard>
            <InfoCard img={phone} bgcolor="text-white font-bold bg-gradient-to-r from-secondary to-primary" heding='Contact Us' otherText="Opening house is very large in lagest inventory "></InfoCard>
        </div>
    );
};

export default Info;