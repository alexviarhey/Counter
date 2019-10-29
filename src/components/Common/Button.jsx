import React from 'react'
import s from '../Common.module.css'
import {connect} from "react-redux";

const Button = (props) => {
    const error = (props.newMinValue < 0
        || props.newMaxValue === props.newMinValue || props.newMinValue > props.newMaxValue);
    const disabled = props.title === 'Set' ? props.disabled || error : !props.disabled || error
        || (props.title === 'inc' && props.count === props.maxValue);

       return (
        <div>
            <button disabled={disabled}  onClick={props.onClick} className={s.button}>{props.title}</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        disabled: state.counter.disabled,
        newMaxValue: state.counter.newMaxValue,
        newMinValue: state.counter.newMinValue,
        count: state.counter.count,
        maxValue: state.counter.maxValue
    }
};

export default connect(mapStateToProps, null)(Button)