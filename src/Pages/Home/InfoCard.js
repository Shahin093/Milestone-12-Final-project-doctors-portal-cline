import React from 'react';

const InfoCard = ({ img, bgcolor, heding, otherText }) => {
    console.log(img)
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgcolor}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{heding}</h2>
                <p className=''>{otherText}</p>

            </div>
        </div >
    );
};

export default InfoCard;