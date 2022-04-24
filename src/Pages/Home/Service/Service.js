/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {_id, name, price, img, description} = props.service;
    const navigate = useNavigate();

    const handleServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handleServiceDetail(_id)} className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;