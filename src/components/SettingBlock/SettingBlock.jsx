import React from 'react'
import s from '../Common.module.css'
import SettingDisplay from "./SettingDisplay";
import SettingButtonsContainer from "./SettingButtonContainer";

const SettingBlock = () => {
    return (
        <div className={s.wrapper}>
            <SettingDisplay />
            <SettingButtonsContainer  />
        </div>
    )
};

export default SettingBlock

