import React  , {useState}from "react";
import './Styles/Form.css'


function Form(){

    const [form , setForm] =  useState({
        name : "",
        email : "",
        mobile : "",
        password  :"",
        gender : 'male',
        policy  :false,
        course : "",
        address : ""

    })


    const handleFormInputs = (e) =>{
        // // setForm(e.target.value)
        // console.log(e.target.name)
        setForm({...form , [e.target.name]  : e.target.value})
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


    const handleSubmit = ()=>{
        console.log(form)
    }
    return(
        <>
        <div className="container">
            <div  >
            <form>
            <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="email"  name="name" value={form.name} onChange={handleFormInputs}  class="form-control" id="name" />
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Full Address</label>
    <input type="text" name="address" value={form.address} class="form-control" onChange={handleFormInputs} id="address"  />
  </div>
  <div class="mb-3">
    <label for="mobile" class="form-label">Mobile</label>
    <input type="number" name="mobile" value={form.mobile}  class="form-control" onChange={handleFormInputs} id="mobile"  />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" name="email" value={form.email} class="form-control" onChange={handleFormInputs} id="email" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" name="password" value={form.password} onChange={handleFormInputs} class="form-control" id="password" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox"   onChange={acceptPolicy} class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label"  for="exampleCheck1">Accept Policy</label>
  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input"  onChange={handleGender}  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" />
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
  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
            </div>
        </div>
        </>
    )

}

export default Form;