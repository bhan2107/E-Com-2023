import React from "react";


function MyInput({placeholder,borderSize,borderColor, borderType, width,borderRadius,disable}){


console.log(placeholder)    
console.log(typeof placeholder)    

return(
    <>
    <input 
    placeholder={placeholder } 
    style={{border:`${borderSize}px ${borderType} ${borderColor}` , width:width , borderRadius:borderRadius }}
    disabled = {disable} 

    />
    </>
)


}

export default MyInput;