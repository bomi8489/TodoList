import styled from 'styled-components';

const Clock = styled.div`
margin-top: 10%;
width: 50vw;
height: 100%;
flex-grow: 1;
font-size: 4.5rem;
margin-bottom: 2%
`

const Clock24 = styled.div`
display: inline-block
`

const ClockAmpm = styled.div`
display: inline-block
`

const SwitchInput = styled.input`
position: absolute;
appearance: none;
&:checked{
    background: #e55;
    left: 33px;
    background: #fff;
    box-shadow: 1px 2px 3px #00000020;
}
`

const SwitchInputLabel = styled.label`
position: relative;
cursor: pointer;
display: inline-block;
width: 29px;
height: 28px;
background: none;
margin-left: 1.5vw;
margin-bottom: 1vh;
border: 2px solid #daa;
border-radius: 10px;
transition: 0.2s;

&:hover{
    background: #efefef;
}
`

const OnoffBtn = styled.span`
position: absolute;
top: 5px;
left: 5px;
display: inline-block;
width: 19px;
height: 19px;
border-radius: 20px;
background: #daa;
transition: 0.2s;
`



export { Clock, Clock24, ClockAmpm, SwitchInput, SwitchInputLabel, OnoffBtn, }