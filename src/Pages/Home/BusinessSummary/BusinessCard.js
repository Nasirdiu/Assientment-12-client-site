import React from 'react';

const BusinessCard = ({ img, CardTitle, background, CardBody }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${background}`}>
      <figure className="pl-5 pt-5">
        <img className='w-20' src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{CardTitle}</h2>
        <p>{CardBody}</p>
      </div>
    </div>
    );
};

export default BusinessCard;