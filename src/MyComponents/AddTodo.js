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

  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">Todo Title</label>
          {/*setTitle defined above, changes state of title from input*/}
          <input type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}}  class="form-control" id="title" aria-describedby="emailHelp" />
          
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">Todo Description</label>
          <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" />
        </div>
        
        <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}
