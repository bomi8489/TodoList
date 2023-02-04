import React from "react";
import ClockBox from "./ClockBox";
import WeatherBox from "./WeatherBox";
import { AdditionBox } from "../Presenter/AdditionBoxPresenter";
  
// 날씨는 보류
function AdditionalBox() {
    return (
        <AdditionBox>
            <ClockBox/>
            {/* <WeatherBox/>  */}
        </AdditionBox>
    )
}

export default React.memo(AdditionalBox);