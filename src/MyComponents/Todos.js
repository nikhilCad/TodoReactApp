//rafc from ES7 extension

import React from 'react';
import {TodoItem} from './TodoItem';// .. to go up one place

//Every Todos has TodoItems, see line <TodoItem todo = {props.todos[0]}/> 
//my is margin in y-axis
//map line takes all props.todos in input(the tasks), and outputs them one by one, we feed
//that to TodoItem then

//Todos made in App.js
//onDelete called when button clicked in TodoItems, go to App.js for definition
//the key line is to remove error to make evry item unique
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3><br></br>

            {props.todos.length==0? "No Todos to display":

            props.todos.map((todo)=>{
                return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
            
        </div>
    )
}
