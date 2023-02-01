import styled from 'styled-components';

const Inputlist = styled.li`
height: 30px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
border-bottom: solid 1px #f8f8f2;
`

const Button = styled.button`
font-family: 'Do Hyeon', cursive;
font-weight: bold;
text-align: center;
color: #ff79c6;
background-color: transparent;
box-shadow: none;
outline: none;
border: 0;
`

const Contentsvalue = styled.div`
flex-grow: 1;
font-size: 1rem;
`

export { Inputlist, Button, Contentsvalue };