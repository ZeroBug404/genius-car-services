import React from 'react';
import useServices from '../../Hooks/Services/ServicesHook';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleManage = (id) => {
        const proceed = window.confirm('Are you sure?')
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (proceed) {
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            }
        })

    }
    return (
        <div className="text-center my-3">
            <h2 className='text-primary'>Manage Your Services</h2>
            {
                services.map(service => <h5 
                    key={service._id}
                    >{service.name}<button onClick={() => handleManage(service._id)}>X</button></h5>)
            }
            
        </div>
    );
};

export default ManageServices;