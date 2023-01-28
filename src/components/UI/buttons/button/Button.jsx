import React from 'react';
import classes from './button.module.css';
const Button = ({onClick,text,disabled}) => {

    return (
        <div
            className={`${classes.button} ${disabled? classes.button_disabled:''}`}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Button;