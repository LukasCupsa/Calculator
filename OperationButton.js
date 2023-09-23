//NOTE: This could be one possible source of error. I am confident that this could it perfect, however the currentOperand feature doe scall this button so potential source?

import { ACTIONS } from "./App"

export default function OperationButton({dispatch, operation}) {

    return  (
    
        <button 
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}
         >
            {operation}
        </button>
    )
}
