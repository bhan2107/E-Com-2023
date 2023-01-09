import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import PropsDrilling from '../Props-Drilling/Example'
import Form from '../Form-Handling';



import {Routes , Route , Navigate} from 'react-router-dom'




function Routing(){
    
   


return(
    <>
    <Routes>
        <Route path='/'  element={<Navigate to='/home' />} />
        <Route path='/home'  element={<Home/>}  />
        <Route path='/about'  element={<About/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/propsd'  element={<PropsDrilling/>}/>
        <Route path='/form'  element={<Form/>}/>
        <Route  path='*'  element={<Navigate to='/home' />}/>
    </Routes>
   
    </>
)    


}


export default Routing;