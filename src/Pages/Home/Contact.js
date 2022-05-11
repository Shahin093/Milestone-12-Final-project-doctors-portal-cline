import React from 'react';
import contact from '../../assets/images/appointment.png'
const Contact = () => {
    return (


        <div style={{
            background: `url(${contact})`
        }} className='text-center my-4'>
            <h3 className='text-xl text-primary py-5'>Contact Us</h3>
            <h2 className='text-4xl text-white py-5 mb-5'>Stay Connected With Us
            </h2>
            <form className='p-3' action="">
                <input type="text" placeholder="Type here" className="input input-bordered input-xs my-2 w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-sm my-2 w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-md my-2 w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-lg my-2 w-full max-w-xs" /> <br />
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
            </form>

        </div>
    );
};

export default Contact;