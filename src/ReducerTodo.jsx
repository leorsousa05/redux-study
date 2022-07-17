import React, { useReducer } from 'react';



export default function ReducerTodo() {
    function reducer(state, action) {
        switch(action.type) {
            case 'setInput':
                return 
    
        }
    }

    const handleChange = () => {
        
    }

    const initialState = []
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            <form>
                <input type="text" value={input} onChange={handleChange} />
                <input type="submit" value="Submit" />
                <p></p>
            </form>
        </>
    )
}