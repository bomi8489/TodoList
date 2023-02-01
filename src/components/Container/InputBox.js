import React from "react";
import {
    Inputbox,
    Subtitle,
    Input,
    Button
} from "../Presenter/InputboxPresenter"
import PropTypes from "prop-types"

function InputBox({ listvalue, onChange, onCreate }) {
    return (
        <Inputbox>
            <Subtitle>아래 입력칸에 오늘 할일을 입력해주세요</Subtitle>
            <form>
                <Input 
                    name="inputbox"
                    onChange={onChange}
                    value={listvalue}
                    submit={onCreate}
                />
                <Button onClick={onCreate}></Button>
            </form>

        </Inputbox>
    )
}

InputBox.prototype = {
    listvalue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
}

export default React.memo(InputBox);