//rafc from ES7 extension

import React from 'react'

//btn-sm btn-danger are from bootstrap itself

// we wrote {todo, onDelete} in below so not write {props.todo} everytime
//onDelete called when button clicked
//we use arrow function in onClick so it dont call by itslef on startup, function is PASSED not CALLED
export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
 