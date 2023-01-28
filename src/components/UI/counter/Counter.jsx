import React from 'react';
import classes from './counter.module.css';

const Counter = ({value, increment, decrement,disabled}) => {

    return (
        <div className={classes.counter}>
            <div
                className={`${classes.counter__button} ${disabled? classes.counter__button_disabled : '' }`}
                onClick={increment}
            >
                {'+'}
            </div>
            <div
                className={classes.counter__value}
            >
                {value}
            </div>
            <div
                className={`${classes.counter__button} ${disabled? classes.counter__button_disabled : '' }`}
                onClick={decrement}
            >
                {'-'}
            </div>
        </div>
    );
};

export default Counter;