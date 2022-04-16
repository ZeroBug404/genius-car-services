import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServceDetail = () => {
    const {serviceId} = useParams();

    return (
        <div className='text-center mt-5'>
            <h2>Service Id: {serviceId}</h2>
            <Link className='btn btn-primary' to='/checkout'>Procced Checkout</Link>
        </div>
    );
};

export default ServceDetail;