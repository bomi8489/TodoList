import React, {useRef, useState, useCallback, useEffect} from 'react';
import './App.css';
import OutlineBox from "./components/Container/OutlineBox";

function App() {
  
  // 입력창 상태 관리
  const [inputs, setInputs] = useState({
    listvalue: ''
  });
  
  const { listvalue } = inputs;
  const onChange = useCallback ( e => {
    const { value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      listvalue: value
    }));
  }, []);

  // todolist 상태관리
  let savedId = 0;
  const [todoLists, setTodoLists] = useState(() => {
    if(typeof window !== "undefined"){
      const savedtodo = window.localStorage.getItem("todo")
      if(JSON.parse(savedtodo)[0] !== undefined) {
        savedId = JSON.parse(savedtodo)[JSON.parse(savedtodo).length-1].id+1
        return JSON.parse(savedtodo)
      }else {
        return []
      }
    }
  });
  
  const nextId = useRef(savedId);
  const onCreate = useCallback ( e => {
    e.preventDefault();
    const todoList = {
      id: nextId.current,
      listvalue
    };
    setTodoLists([...todoLists, todoList]);

    setInputs({
      listvalue: ''
    });
    nextId.current += 1;
  }, [listvalue]);

  // todo 삭제함수
  const onRemove = useCallback ( id => {
    setTodoLists(todoLists => todoLists.filter(todoList => todoList.id !== id));
  }, []);


  // 리스트 저장함수
  useEffect(() => { 
    window.localStorage.setItem("todo", JSON.stringify(todoLists))
  }, [todoLists])

  // 24시간
  function get24Clock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? `0` + `${hours}` : `${hours}`;
    seconds = (seconds < 10) ? `0` + `${seconds}` : `${seconds}`;
    let timer24 = `${hours}:${minutes<10?`0${minutes}:${seconds}`:`${minutes}:${seconds}`}`;
    return timer24
  }
  // 12시간
  function getAMPMClock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const AmOrPm = hours>=12? 'PM' : "AM";
    hours = (hours%12)||12;
    seconds = (seconds < 10) ? `0` + `${seconds}` : `${seconds}`
    let timerAmpm = `${hours}:${minutes<10?`0${minutes}:${seconds}`:`${minutes}:${seconds}`} ${AmOrPm}`;
    return timerAmpm
  }

  return (
    <OutlineBox 
      listvalue={listvalue}
      todoLists={todoLists}
      onChange={onChange}
      onCreate={onCreate}
      onRemove={onRemove}
      clock24={get24Clock}
      clockAmpm={getAMPMClock}
    />
  );
}

export default App;