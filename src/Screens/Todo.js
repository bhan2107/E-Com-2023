import React from "react";
import  {memo} from 'react'



function Todo({todos, addTodo}){

console.log("Rendring Todo")
return(
    <div>
    <div>
        <h1>My Todos</h1>
        {todos.map((todo ,  index)=>(
            <h1 key={index}> {todo} </h1>
        ))}
        <button  onClick={addTodo} >Add Todo</button>
    </div>
</div>
)


}

export default memo(Todo);