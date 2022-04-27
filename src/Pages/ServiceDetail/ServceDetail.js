import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/Services/useServiceDetail';

const ServceDetail = () => {
    const {serviceId} = useParams();

    const [service, setService] = useServiceDetail(serviceId);

    return (
        <div className='text-center mt-5'>
            <h2>Book: {service.name}</h2>
            <Link className='btn btn-primary' to={`/checkout/${serviceId}`}>Procced Checkout</Link>
        </div>
    );
};

export default ServceDetail;