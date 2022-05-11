import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
import treatment from '../../assets/images/treatment.png'
import GetStartedBtn from '../Shared/GetStartedBtn';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluride Treatment',
            description: '',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity FIlling',
            description: '',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening,
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-12 my-14'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='px-12 pl-28'>
                <div class="hero min-h-screen bg-base-200 py-12">
                    <div class="hero-content flex-col lg:flex-row gap-10">
                        <img width="458px" height='5760px' src={treatment} />
                        <div className=''>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the pont of using Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum, blanditiis iusto nobis nam tempore nisi aperiam unde rem alias pariatur doloribus cumque, ut aliquam?</p>
                            <GetStartedBtn></GetStartedBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;