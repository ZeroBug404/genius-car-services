/* eslint-disable no-unused-vars */
import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, price, img, description} = props.service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>{name}</button>
        </div>
    );
};

export default Service;