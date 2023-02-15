import React from "react";
import useInterval from 'use-interval';
import { 
    Clock,
    Clock24,
    ClockAmpm,
    SwitchInput, 
    SwitchInputLabel,
     OnoffBtn,
 } from "../Presenter/ClockBoxPresenter";
  
function ClockBox() {
    const nowdate = new Date().toLocaleTimeString();
    const date = new Date();
    const date2 = new Date();

    let hours = date2.getHours();
    let minutes = date2.getMinutes();
    let seconds = date2.getSeconds();

    hours = (hours < 10) ? `0` + `${hours}` : `${hours}`;
    seconds = (seconds < 10) ? `0` + `${seconds}` : `${seconds}`;
    let time24 = `${hours}:${minutes<10?`0${minutes}:${seconds}`:`${minutes}:${seconds}`}`;

    const [time, setTime] = React.useState([nowdate]);
    const [time2, setTime2] = React.useState([time24]);

    useInterval(() => {
        setTime(date.toLocaleTimeString());
    }, 1000);
    
    useInterval(() => {
        setTime2(time24);
    }, 1000);

    let [button, setButton] = React.useState(false);

    let switchButton = (() => {
        setButton(!button)
    })

    return (
        <Clock>
            {button ? <ClockAmpm>{time}</ClockAmpm> : <Clock24>{time2}</Clock24>}
            <SwitchInput type="checkbox" id="switch"/>
            <SwitchInputLabel htmlFor="switch" onClick={switchButton}>
                <OnoffBtn/>
            </SwitchInputLabel>
        </Clock>
    )
}

export default React.memo(ClockBox);