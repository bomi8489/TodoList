import React from "react";
import { 
    ClockBox,
    Clock24Box,
    ClockAmpmBox,
 } from "../Presenter/AdditionalBoxPresenter";


function AdditionalBox( clock24, clockAmpm ) {
    return (
        <ClockBox>
            <Clock24Box></Clock24Box>
            {/* <ClockAmpmBox>{clockAmpm}</ClockAmpmBox> */}
        </ClockBox>
    )
}

export default AdditionalBox;