import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



function Home(){

const navigate  = useNavigate()   


const [count , setCount ] =  useState(0)


   
const handleClick = () =>{

 setCount(count +1)  

 if(count == 5)
 {
   navigate('/about' , {state:{name : "Bhanu"}})
 }
}




return(
<>
   <h1>This is Home.js</h1>
   <button onClick={handleClick}  >Click Me {count}</button>

   
</>

)



}

export default Home



