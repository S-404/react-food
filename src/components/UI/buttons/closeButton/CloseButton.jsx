import React from 'react';
import classes from "./closeButton.module.css";

const CloseButton = ({...props}) => {
    return (
        <div className={classes.myCloseButton__div} {...props}>
            <div className={classes.myCloseButton}>✕</div>
        </div>
    );
};

export default CloseButton;