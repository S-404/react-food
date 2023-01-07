import React from 'react';
import classes from './button.module.css';
const Button = ({onClick,text}) => {
    return (
        <div
            className={classes.button}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Button;