import React from 'react'
import Input from "./Input";
import s from '../Common.module.css'
import {connect} from "react-redux";
import {setNewMaxValue, setNewMinValue} from "../Redux/counterReducer";



const SettingDisplay = (props) => {
    return (
        <div className={s.displayOuter}>
            <Input title='max value' newMaxValue={props.newMaxValue}  newMinValue={props.newMinValue} setValue={props.setNewMaxValue}
                   value={props.newMaxValue} />
            <Input title='min value' newMaxValue={props.newMaxValue}  newMinValue={props.newMinValue}  setValue={props.setNewMinValue}
                   value={props.newMinValue} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        newMaxValue: state.counter.newMaxValue,
        newMinValue: state.counter.newMinValue
    }
};


export default connect(mapStateToProps, {setNewMaxValue, setNewMinValue})(SettingDisplay)