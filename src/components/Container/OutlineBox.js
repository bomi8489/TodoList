import React from "react"
import ContainerBox from "./ContainerBox"
import InputBox from "./InputBox"
import AdditionalBox from "./AdditionalBox"
import Todolist from "../Presenter/TodolistPresenter"
import PropTypes from "prop-types"

function OutlineBox({ listvalue, todoLists, onChange, onCreate, onRemove }) {
    return (
        <Todolist>
            <AdditionalBox
            />
            <ContainerBox
                todoLists={todoLists}
                onRemove={onRemove}
            />
            <InputBox
                listvalue={listvalue}
                onChange={onChange}
                onCreate={onCreate}
            />
        </Todolist>
    )
}

OutlineBox.prototype = {
    listvalue: PropTypes.string.isRequired,
    todoLists: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default React.memo(OutlineBox)