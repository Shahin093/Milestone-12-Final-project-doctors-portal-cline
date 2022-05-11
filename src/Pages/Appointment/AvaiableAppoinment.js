import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from '../Home/Services';
import Service from './Service';

const AvaiableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available Appointment on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvaiableAppoinment;