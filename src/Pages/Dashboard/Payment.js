import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2XcOFWzcOdRAbZsuNZhvcbN6GZ7t1rox7AFNxmUbySY6mLsRUsjwqXK1YafHTJtKqMk4vwUdTYDfb0oQb0asjM00JlEmDWJs');

import(useQuery)
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    );
    console.log(appointment)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (


        <div>
            <div class="card w-50 max-w-md bg-base-100  my-12 shadow-xl">
                <div class="card-body">
                    <p className='font-bold'>HEllo {appointment.patientName}</p>

                    <h2 class="card-title">Pay for {appointment?.treatmentName}</h2>
                    <p>Your Appointment <span className='text-orange-200'>{appointment?.date}</span> at {appointment?.slot}</p>
                    <p>Please pay : ${appointment.price}</p>
                </div>
            </div>
            <div className='card w-50 flex-shrink-0 max-w-md bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>





    );
};

export default Payment;