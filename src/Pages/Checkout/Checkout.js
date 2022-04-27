/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../Hooks/Services/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service, setService] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    
    const handlePlaceOrder = (e) => {
        e.preventDefault();

        const orders = {
            email: service.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
    }

    return (
        <div className='text-center mt-5 container'>
            <h2 className='text-primary'>Complete Checkout</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-50 p-2' type="text" name='name' placeholder={service.name} readOnly disabled/>
                <br />
                <br />
                <input className='w-50 p-2' type="text" name='email' placeholder={user.email} readOnly disabled/>
                <br />
                <br />
                <input className='w-50 p-2' type="text" name='name' placeholder={user.displayName} readOnly disabled/>
                <br />
                <br />
                <input className='w-50 p-2' type="text" name='address' placeholder='Address' autoComplete='off'/>
                <br />
                <br />
                <input className='w-50 p-2' type="text" name='phone' placeholder='Phone Number' />
                <br />
                <br />
                <input className='btn btn-primary w-25' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;