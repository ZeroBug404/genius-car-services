import React  from 'react';
import {useState, useEffect} from 'react';

const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])
    return (
        <footer className='text-center mt-5'>
            <p>Copyright © {date}</p>
        </footer>
    );
};

export default Footer;