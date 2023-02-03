import React from "react";
import ClockBox from "./ClockBox";
  
function AdditionalBox() {
    return (
        <ClockBox/>
    )
}

export default React.memo(AdditionalBox);