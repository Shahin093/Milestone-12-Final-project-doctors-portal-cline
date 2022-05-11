import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Appointment from '../../assets/images/appointment.png';
import GetStartedBtn from '../Shared/GetStartedBtn';
const Appoinment = () => {
    return (
        <section style={{
            background: `url(${Appointment})`
        }}
            className='flex justify-center items-center px-12' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary py-5'>Appointment</h3>
                <h2 className='text-4xl text-white py-5 mb-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique eveniet magnam voluptatum non animi sequi aperiam perferendis nihil delectus, sapiente excepturi doloremque asperiores eius enim impedit id accusamus corrupti ea, voluptas tenetur. Dolores officia porro maiores vitae eaque aliquid.</p>
                <GetStartedBtn></GetStartedBtn>
            </div>

        </section >
    );
};

export default Appoinment;