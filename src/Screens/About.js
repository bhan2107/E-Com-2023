
import React , {useState  , useMemo} from "react";




const largeCalulation  =  (num)=>{
    console.log("Wait for Calculation")
    for(let i  = 0  ; i  < 1000000000 ; i++)
    {
        num = num  + 1
    }
    return num
}

function About(){

    const [count , setCount] =  useState(0)
    const [todos , setTodos] =  useState([])
    // const calculation  = largeCalulation(count)
    const calculation =  useMemo(()=>  largeCalulation(count) , [count] )
    


const increment  = () =>{

setCount((count) => count + 1)


}   

const addTodo = () =>{
    
    setTodos((todos) => [...todos ,  "New Todo"])

}


return(
    <>
  <div>
        <div>
            <h1>My Todos</h1>
            {todos.map((todo ,  index)=>(
                <h1 key={index}> {todo} </h1>
            ))}
            <button  onClick={addTodo} >Add Todo</button>
        </div>
    </div>
    <hr/>
    Count : {count}
    <button onClick={increment} >Incr+</button>
    <h1>Large Calculation</h1>
    {calculation}
    </>
)
}

export default About;