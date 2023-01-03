import React from 'react';
import classes from './modal.module.css';
import CloseButton from "../buttons/closeButton/CloseButton";

const Modal = ({children, visible, setVisible, title}) => {
    const rootClasses = [classes.myModal];
    if (visible) {
        rootClasses.push(classes.active);
    }
    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={classes.myModalHeader}>
                    <h5>{title}</h5>
                    <CloseButton onClick={() => setVisible(false)}/>
                </div>


                {children}
            </div>
        </div>
    );
};

export default Modal;
