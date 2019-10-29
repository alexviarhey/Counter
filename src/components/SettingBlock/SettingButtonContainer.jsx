import React from 'react'
import s from '../Common.module.css'
import Button from "../Common/Button";
import {addCount, deleteCount, setNewValues} from "../Redux/counterReducer";
import {connect} from "react-redux";

const SettingButtonsContainer = (props) => {
    return (
        <div className={s.buttonsOuter}>
            <Button title='Set' onClick={props.setNewValues}/>
        </div>
    )
};


export default connect(null, {setNewValues, addCount,  deleteCount})(SettingButtonsContainer)