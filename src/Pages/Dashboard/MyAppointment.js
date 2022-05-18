import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://murmuring-sea-88663.herokuapp.com/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                // .then(res => res.json())
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setAppointment(data)

                });
        }
    }, [user]);

    return (
        <div>
            {/* <h2>My Appointments : {appointment.length}</h2> */}

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((apoint, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{apoint.patientName}</td>
                                <td>{apoint.date}</td>
                                <td>{apoint.slot}</td>
                                <td>{apoint.treatmentName}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;