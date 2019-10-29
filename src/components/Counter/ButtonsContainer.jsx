import React from 'react'
import s from '../Common.module.css'
import Button from "../Common/Button";
import {addCount, deleteCount} from "../Redux/counterReducer";
import {connect} from "react-redux";

const ButtonsContainer = (props) => {
       return (
        <div className={s.buttonsOuter}>
            <Button title='inc' onClick={props.addCount} />
            <Button title='reset' onClick={props.deleteCount} />
        </div>
    )
};

export default connect(null, {addCount, deleteCount})(ButtonsContainer)