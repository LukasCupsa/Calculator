//Main body of code for calculator app
import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./styles.css"


export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate"
}

function reducer(state, {type, payload}) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") return state
            if (payload.digit === "." && state.currentOperand.includes(".")) return state
             return {
                 //This is where an error occurs in the program. The currentOperand is null (until defined through the click of a user), however the || should allow for a null value to be converted into an empty string, hence I don't know why I keep getting the error that currentOperand is undefined.
                ...state,
                currentOperand: `${ currentOperand || ""}${payload.digit}`, //--> Possible fix, maybe include if statement beforehand that if currentOperand is null, convert to empty string? But I already tried assigning a previous value and still doesn't work... could the error be in the button file?
            } //Why does this parse as a null value?
    }
}


function App() {

    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})


    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div> 

            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <OperationButton operation="÷" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="x" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="+" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <button className="span-two">=</button>
        </div>
        )
}

export default App
