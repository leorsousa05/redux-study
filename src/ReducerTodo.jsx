import React, { useEffect, useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'set_input':
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state
    }
}

export default function ReducerTodo() {

    const initialState = {
        input: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log(state.input)
    }, [state.input])

    return(
        <>
            <form>
                <input type="text" value={state.input} onChange={(e) => dispatch({
                    type: 'set_input',
                    key: "input",
                    value: e.target.value
                })} />
                <input type="submit" value="Submit" />
                <p></p>
            </form>
        </>
    )
}