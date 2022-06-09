//rafc from ES7 extension

import React from 'react';
import {TodoItem} from '../MyComponents/TodoItem';

//Every Todos has TodoItms, see line <TodoItem todo = {props.todos[0]}/> 
export const Todos = (props) => {
    return (
        <div className="container">
            <h3>Todos List</h3><br></br>
            
            <TodoItem todo = {props.todos[0]}/>
            <TodoItem todo = {props.todos[1]}/>
            <TodoItem todo = {props.todos[2]}/>
        </div>
    )
}
