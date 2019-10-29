import React from 'react'
import s from '../Common.module.css'

const Input = (props) => {

    const addNewValue = (e) => {
        let newValue = +e.currentTarget.value;
        props.setValue(newValue)
    };
    const error = ( props.newMinValue < 0
        || props.newMaxValue === props.newMinValue || props.newMinValue > props.newMaxValue);
    const classForInput = error ? s.input + ' ' + s.error : s.input;

    return (
        <div className={s.inputWrapper}>
            <div className={s.inputText}>{props.title}:</div>
            <div><input onChange={(e) => addNewValue(e)} className={classForInput} type="number" value={props.value}/></div>
        </div>
    )
};

export default Input