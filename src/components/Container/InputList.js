import React from "react";
import {
    Inputlist, 
    Button,
    Contentsvalue,
} from "../Presenter/InputlistPresenter"
import PropTypes from "prop-types"

const ListBox = React.memo(function ListBox({ todoList, onRemove }) {
    //printID(todoList)
    return(
        
        <Inputlist>
            <Contentsvalue>{todoList.listvalue}</Contentsvalue>
            <Button onClick={() => onRemove(todoList.id)}>삭제</Button>
        </Inputlist>
    )
})

function printID(todoList){
    console.log(todoList.listvalue);
}

const InputList = React.memo(function InputList({ todoLists, onRemove }) {
    return (
        <>
            {todoLists.map(todoList => (
                <ListBox todoList={todoList} key={todoList.id} onRemove={onRemove} />
            ))}
        </>
    )
})

InputList.prototype = {
    todoLists: PropTypes.array,
    onRemove: PropTypes.func.isRequired,
}

export default React.memo(InputList)