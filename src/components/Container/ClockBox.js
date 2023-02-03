import React from "react";
import useInterval from 'use-interval';
import { 
    Clock,
 } from "../Presenter/ClockBoxPresenter";
  
function ClockBox() {
    const [time, setTime] = React.useState('');
    const date = new Date();

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