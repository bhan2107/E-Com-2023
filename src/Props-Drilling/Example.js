import React , {useState , useContext , createContext} from "react";


const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

const UserContext = createContext();
const ThemeContext = createContext(themes.light);


 function Component1(){
  
    const [name , setName] =  useState('Bhanu')
    return(
        <>
        <UserContext.Provider value={name} >
        <ThemeContext.Provider value={themes.light} >

        <h1>This is Component-1</h1>
        <Component2  />
        </ThemeContext.Provider>
        </UserContext.Provider>
        </>
    )
 }
 function Component2(){
    return(
        <>
        <h1>This is Component-2</h1>
        <Component3  />
        </>
    )
 }
 function Component3(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>This is Component-3 :{user}</h1>
        <Component4  />
        </>
    )
 }
 function Component4(){

    const theme =  useContext(ThemeContext)
    return(
        <>
        <h1>This is Component-4</h1>
        <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
        <Component5  />
        </>
    )
 }
 function Component5(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>This is Component-5</h1>
        <h1>Name of User id : {user}</h1>
        </>
    )
 }

 export default Component1;