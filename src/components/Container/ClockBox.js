import React from "react";
import useInterval from 'use-interval';
import { 
    Clock,
 } from "../Presenter/ClockBoxPresenter";
  
function ClockBox() {
    const nowdate = new Date().toLocaleTimeString();
    const date = new Date();
    const [time, setTime] = React.useState([nowdate]);

    useInterval(() => {
        setTime(date.toLocaleTimeString());
    }, 1000);

    return (
        <Clock>
            {time}
        </Clock>
    )
}

export default React.memo(ClockBox);