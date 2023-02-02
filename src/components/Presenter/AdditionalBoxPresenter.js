import styled from 'styled-components';

const ClockBox = styled.div`
margin-top: 10%;
width: 50vw;
height: 100%;
`

const Clock24Box = styled.div`
flex-grow: 1;
font-size: 6rem;
display: inline-block;
`

const ClockAmpmBox = styled.div`
flex-grow: 1;
font-size: 6rem;
display: none;
`

export { ClockBox, Clock24Box, ClockAmpmBox, }