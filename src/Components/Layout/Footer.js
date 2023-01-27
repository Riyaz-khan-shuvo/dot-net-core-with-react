import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <div className='layout'>
            <p> &copy; All Right Reserved {date.getFullYear()} </p>
        </div>
    );
};

export default Footer;