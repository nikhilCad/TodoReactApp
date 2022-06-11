import React from 'react';
import { useState } from 'react';

//call prop.addTodo when submitted
//setTitle in on on Change defined below
export const AddTodo = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  {/*If not use this sumit function page just reloads on adding todo */}
  const submit = (e)=> {
    e.preventDefault();{/* Prevents page reload */}
    if(!title || !desc){
      alert("Title or Description cannot be blank")
    }
    else{
    props.addTodo(title,desc);}{/*Function in App.js */}
    setTitle("");
    setDesc("");
  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">{/*className instead of class is JSX */}
          <label htmlFor="title" className="form-label">Todo Title</label>{/*htmlFor instead of for is JSX */}
          {/*setTitle defined above, changes state of title from input*/}
          <input type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}}  className="form-control" id="title" aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}
