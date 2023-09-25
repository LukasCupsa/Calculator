//Code for any action button, don't believe this is the source of the problem.

import { ACTIONS } from "./App"

export default function DigitButton({dispatch, digit}) {

    return  (
    
        <button 
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}
         >
            {digit}
        </button>
    )
}
