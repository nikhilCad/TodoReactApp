import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos'; //use {} if using rafc as it is trying to find a default export for in your file.
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';
 
function App() {

  let initTodo;
  //load items, we later pass initTodo in our state hook at around line 56
  if(localStorage.getItem("todos")===null){
    initTodo =[];
    
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  };

  //arrow function of javascript, called from TodoItem.js 
  const onDelete =(todo)=>{
      console.log("I am ondelete of todo", todo);
      
      //in React setTodos used to delete
      setTodos(todos.filter((e)=>{
        return e!==todo; //delete this todo
      }
      ));
      localStorage.setItem("todos",JSON.stringify(todos));//save it
  }

  const addTodo =(title,desc)=>{
    console.log("Adding Todo",title,desc);
    //Now adding todo
    let sno;
    if (todos.length==0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno +1;//Calculating new serial number
    }
    const myTodo ={
      title: title,
      desc: desc,
      sno: sno,
    }
    console.log(myTodo);
    //use setTodos to add new todo in the full list/array 
    setTodos([...todos,myTodo]);//... spreads the array elements, so this line is todo1,todo2,...,myTodo

    localStorage.setItem("todos",JSON.stringify(todos));//save it

  }
  
  //setTodos a function that updates the todo, initTodo is the load item
  const [todos, setTodos] = useState(initTodo);

  return (
    <>
   
    <Header title="My Todos List" searchBar={false}/>
    <AddTodo addTodo ={addTodo}/>{/* first addTodo is variable, second addTodo is function defined above */}
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>

    </>
  );
}

export default App;
