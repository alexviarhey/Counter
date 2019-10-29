import React from 'react';
import s from './components/Common.module.css';
import SettingBlock from "./components/SettingBlock/SettingBlock";
import Counter from "./components/Counter/Counter";

class App extends React.Component {
    render() {
        return (
            <div className={s.outer}>
                <SettingBlock  />
                <Counter />
            </div>
        )
    }
}

export default App;