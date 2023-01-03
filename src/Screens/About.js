import Home from "./Home";
import {useLocation} from 'react-router-dom'
function About({bhanu}){


var {state} = useLocation()

console.log(state)

var t =  bhanu

return(
    <>
    <h1>This is About.js</h1>
    </>
)

}

export default About;