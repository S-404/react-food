import React from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import classes from './loader.module.css'

const Loader = ({fontSize}) => {
    return (
        <LoopIcon
            className={classes.loader}
            fontSize={fontSize ?? 'inherit'}
        />
    );
};

export default Loader;