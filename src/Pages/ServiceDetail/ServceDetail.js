import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServceDetail = () => {
    const {serviceId} = useParams();

    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div className='text-center mt-5'>
            <h2>Book: {service.name}</h2>
            <Link className='btn btn-primary' to='/checkout'>Procced Checkout</Link>
        </div>
    );
};

export default ServceDetail;