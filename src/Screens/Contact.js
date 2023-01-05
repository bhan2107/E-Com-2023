import React , {useState ,  useEffect , useMemo} from "react"



function Contact(){

var [count , setCount ] =  useState(0)    

useEffect(()=>{
    console.log("test") // On mount
    if(count == 5)
    {
        alert("hello") // on update
    }
    return ()=>{
        console.log("Bye") // on Unmount
        localStorage.removeItem('count')
    }
},[count])


const handleButton = () =>{
    setCount(count+1)
    localStorage.setItem("count" ,  count)
    console.log(count)
}

    return(<>
    <h1>this is Contact.js & Count is :</h1>
    <button  onClick={handleButton} >Click Me</button>
    
    </>)
}

export default Contact