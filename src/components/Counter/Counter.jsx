import React from 'react'
import s from '../Common.module.css'
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";

const Counter = () => {

    return (
        <div className={s.wrapper}>
            <Display />
            <ButtonsContainer />
        </div>
    )
};

export default Counter