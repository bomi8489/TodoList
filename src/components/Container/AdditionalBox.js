import React from "react";
import ClockBox from "./ClockBox";
import WeatherBox from "./WeatherBox";
import { AdditionBox } from "../Presenter/AdditionBoxPresenter";
  
function AdditionalBox() {
    return (
        <AdditionBox>
            <ClockBox/>
            <WeatherBox/>
        </AdditionBox>
    )
}

export default React.memo(AdditionalBox);