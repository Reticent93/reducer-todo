import React, {useState, useReducer} from 'react'
import {initialState, reducer} from '../reducers/todos'

function TodoForm() {
const [data, setData] = useState()
const [state, dispatch] = useReducer(reducer, initialState)

const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value)
}

const handeEdit = e => {
    e.preventDefault();
    dispatch({type: 'TOGGLE_EDITING'})
}

const handleSubmit = (e) => {
    e.preventDefault();
    // setData(data)
    dispatch({type: 'UPDATE_TODO', payload: data || state.title})
    dispatch({type: 'TOGGLE_EDITING'})
};

    return (
        <div>
            {state.editing ? (  
            <form onSubmit={handleSubmit}>
                <input input='text' placeholder='Input To do' onChange={handleChange} />
                <button type='submit'>Save</button>  
            </form>
             ) : (
            <div>
                <h1>{state.title}</h1>
                <button onClick={handeEdit}>EDIT</button>
                </div>
            )}
        </div>
    )
}

export default TodoForm

