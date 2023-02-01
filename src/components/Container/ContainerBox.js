import React from "react";
import InputList from "./InputList";
import { 
    Containerbox, 
    Contents,
    
} from "../Presenter/ContainerboxPresenter";
import PropTypes from "prop-types"

function ContainerBox({ todoLists, onRemove }) {
    return (
        <Containerbox>
            <Contents>
                <h1>To Do List</h1>
                <ul>
                    <InputList
                        todoLists={todoLists}
                        onRemove={onRemove}
                    />
                </ul>
            </Contents>
        </Containerbox>
    )
}

ContainerBox.prototype = {
    todoLists: PropTypes.array,
    onRemove: PropTypes.func.isRequired,
}

export default ContainerBox;