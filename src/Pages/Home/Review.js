import React from 'react';

const Review = ({ review }) => {
    const { img, name, location } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae perspiciatis atque iusto aperiam ea!</p>
            </div>
            <div className='flex items-center'>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 m-5">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;