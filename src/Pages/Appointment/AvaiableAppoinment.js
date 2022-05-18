import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from '../Home/Services';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const AvaiableAppoinment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    // useEffect(() => {
    //     fetch(`https://murmuring-sea-88663.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate]);
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`https://murmuring-sea-88663.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available Appointment on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                refetch={refetch}
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvaiableAppoinment;