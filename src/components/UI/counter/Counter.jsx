import React from 'react';
import classes from './counter.module.css';

const Counter = ({value, increment, decrement}) => {

    return (
        <div className={classes.counter}>
            <div
                className={classes.counter__button}
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
                className={classes.counter__button}
                onClick={decrement}
            >
                {'-'}
            </div>
        </div>
    );
};

export default Counter;