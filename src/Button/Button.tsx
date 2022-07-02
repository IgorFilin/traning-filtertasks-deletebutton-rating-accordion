import React from 'react';
import classes from './Button.module.css'



type ButtonPropsType = {
    name: string
    callback: () => void
}

function Button(props: ButtonPropsType) {

    const onClickHandler = () => {
        props.callback()
    }


    return (

        <span className={classes.button}>
            <button onClick={onClickHandler}>{props.name}</button>
        </span>
    );
};

export default Button;