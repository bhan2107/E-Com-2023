
import React , {useState  , useMemo , useCallback} from "react";
import Todo from "./Todo";




// const largeCalulation  =  (num)=>{
//     console.log("Wait for Calculation")
//     for(let i  = 0  ; i  < 1000000000 ; i++)
//     {
//         num = num  + 1
//     }
//     return num
// }

function About(){

    const [count , setCount] =  useState(0)
    const [todos , setTodos] =  useState([])
    // const calculation  = largeCalulation(count)
    // const calculation =  useMemo(()=>  largeCalulation(count) , [count] )
    


const increment  = () =>{

setCount((count) => count + 1)


}   

const addTodo = useCallback(() =>{
    
    setTodos((todos) => [...todos ,  "New Todo"])

},[todos]);


return(
    <>
 <Todo todos={todos} addTodo={addTodo} />
    <hr/>
    Count : {count}
    <button onClick={increment} >Incr+</button>
    <h1>Large Calculation</h1>
    {/* {calculation} */}
    </>
)
}

export default About;