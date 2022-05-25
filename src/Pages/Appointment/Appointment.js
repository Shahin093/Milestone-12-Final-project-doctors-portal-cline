import { format } from 'date-fns';
import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvaiableAppoinment from './AvaiableAppoinment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>

            <AvaiableAppoinment date={date} setDate={setDate}></AvaiableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;