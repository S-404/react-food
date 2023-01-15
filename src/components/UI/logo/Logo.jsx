import React from 'react';
import './logo.scss'
import reactFoodLogo from '../../../assets/logo/reactFoodLogo_.png'
import reactFoodLogoMini from '../../../assets/logo/reactFoodLogo-mini.png'
import useMatchMedia from "../../../hooks/useMatchMedia";

const Logo = () => {
    const matches800px = useMatchMedia(800)
    return (
        <div className='logo'>
            <img className='logo__img' src={matches800px ? reactFoodLogoMini : reactFoodLogo} alt='react-food'/>
        </div>
    );
};

export default Logo;