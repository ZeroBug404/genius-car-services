/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    // const handleRegister = (e) => {
    //     e.preventDefault()
    //     const email = e.target.email.value;
    //     const password = e.target.password.value
        
    //     createUserWithEmailAndPassword(email, password)
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    if (user) {
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='register-form mt-5'>
            <h2 className='text-primary' style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;