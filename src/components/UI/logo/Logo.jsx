import React from 'react';
import './logo.scss'
import logo from '../../../assets/logo/react-food-logo.svg'
const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo__img' src={logo} alt='react-food'/>
        </div>
    );
};

export default Logo;