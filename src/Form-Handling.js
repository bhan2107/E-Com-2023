import React  , {useState , useEffect}from "react";
import './Styles/Form.css'
import {toast} from 'react-toastify'
import CustomToast from "./Config/CustomToast";


function Form(){




    const [form , setForm] =  useState({
        name : "",
        email : "",
        mobile : "",
        password  :"",
        gender : 'male',
        policy  :false,
        course : "",
        address : "",
        error : {name_input : false , email_input : false , mobile_input :false , address_input:false , password_input:false }


    })



    const handleFormInputs = (e) =>{
        // // setForm(e.target.value)
        // console.log(e.target.name)
        setForm({...form , [e.target.name]  : e.target.value , ['error'] : {...form.error , [`${e.target.name}_input`] :  false}})
        
    }

    const acceptPolicy  =  (e)=>{
        console.log(e.target.checked)
        setForm({...form , ['policy'] : e.target.checked })
    }

    const handleGender = (e) =>{
        // setForm

        setForm({...form ,  ['gender'] : e.target.value })
        
    }

    const handleCourse = (e) =>{
        console.log(e.target.value)
        setForm({...form , ['course'] : e.target.value})

    }


    const handleSubmit = (e)=>{
      e.preventDefault()


      var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      var rgm =  /^[6-9]\d{9}$/

        if(form.name == "")
        {
//  toast.error("Please Enter Your name")
setForm({...form ,  ['error']:{...form.error , name_input : true}})
        }
        if(regex.test(form.email) == false){
          // toast.error("Please Enter a valid Email")
          setForm({...form ,  ['error']:{...form.error , email_input : true}})


        }
//         else if(rgm.test(form.mobile) == false)
//         {
//           // toast.error("Please Enter a valid Mobile Number")
//           setForm({...form ,  ['error']:{...form.error , mobile_input : true}})


//         }
//         else if(form.gender  == "" || form.gender  == null)
//         {
//           toast.error("Please Select Geneder !!")

//         }
//         else if(form.course == "")
//         {
//           toast.error("Please Select Course")

//         }
//         else if(form.address =="")
//         {
//           // toast.error("Please Enter Address")
//           setForm({...form ,  ['error']:{...form.error , address_input : true}})


//         }
//         else if(form.password == "" || form.password.length < 4  )
//         {
//           // toast.error("Please Enter a valid Password")
//           setForm({...form ,  ['error']:{...form.error , address_input : true}})

//         }
//         else
//         {
//    console.log(form)
//         }
    }
    return(
        <>
        <CustomToast position={'top-center'} />
        <div className="container">
            <div  >
            <form>
            <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="email" style={{borderColor: form.error.name_input ? "red"  :"black"}}  name="name" value={form.name} onChange={handleFormInputs}  class="form-control" id="name" />
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Full Address</label>
    <input type="text" style={{borderColor: form.error.address_input ? "red"  :"black"}} name="address" value={form.address} class="form-control" onChange={handleFormInputs} id="address"  />
  </div>
  <div class="mb-3">
    <label for="mobile" class="form-label">Mobile</label>
    <input type="number" style={{borderColor: form.error.mobile_input ? "red"  :"black"}} name="mobile" value={form.mobile}  class="form-control" onChange={handleFormInputs} id="mobile"  />
    <div hidden={!form.error.mobile_input} id="emailHelp" class="form-text">Password should be four characters long</div>

  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" style={{borderColor: form.error.email_input ? "red"  :"black"}} name="email" value={form.email} class="form-control" onChange={handleFormInputs} id="email" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" style={{borderColor: form.error.password_input ? "red"  :"black"}} name="password" value={form.password} onChange={handleFormInputs} class="form-control" id="password" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox"   onChange={acceptPolicy} class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label"  for="exampleCheck1">Accept Policy</label>
  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" checked={true} onChange={handleGender}  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" />
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input"  onChange={handleGender}  type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" />
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<select class="form-select" onChange={handleCourse} aria-label="Default select example">
  <option value="" >Select Course</option>
  <option value="C++">C++</option>
  <option value="Java">Java</option>
  <option value="React">React</option>
</select>

</form>
  <button type="submit" disabled={!form.policy} onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Submit</button>
            </div>
        </div>
        </>
    )

}

export default Form;