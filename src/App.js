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
  const [todoLists, setTodoLists] = useState(() => {
    if(typeof window !== "undefined"){
      const savedtodo = window.localStorage.getItem("todo")
      return (savedtodo !== null) ? JSON.parse(savedtodo) : [""]
    }
  });

  const nextId = useRef(0);
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
  /// 일부 todo를 삭제 후 재입력하였을때 새로운 todoLIst의 id값과 기존에 있던 list의 id값이 동일하여 같은 아이디값을 삭제하게 되는 오류 존재


  // 리스트 저장함수
  useEffect(() => { 
    window.localStorage.setItem("todo", JSON.stringify(todoLists))
  }, [todoLists])

  return (
    <OutlineBox 
      listvalue={listvalue}
      todoLists={todoLists}
      onChange={onChange}
      onCreate={onCreate}
      onRemove={onRemove}
    />
  );
}

export default App;