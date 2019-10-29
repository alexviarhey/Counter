import React from 'react'
import s from '../Common.module.css'
import {connect} from "react-redux";


const Display = (props) => {
    const classForNum = (props.count === props.maxValue) ? s.num + ' ' + s.error : s.num;
    const error = (props.newMaxValue < 0 || props.newMinValue < 0
        || props.newMaxValue === props.newMinValue || props.newMinValue > props.newMaxValue);
    return (
        <div className={`${s.displayOuter} ${s.num}`}>
            {(error && <div className={s.incValue}>Incorrect value!</div>)
                || (!props.disabled && <div className={s.enterText}>enter values and press 'set' </div> )
                || (<div className={classForNum}>{props.count}</div>)
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        maxValue: state.counter.maxValue,
        newMaxValue: state.counter.newMaxValue,
        newMinValue: state.counter.newMinValue,
        disabled: state.counter.disabled
    }
};

export default connect(mapStateToProps, null)(Display)