import React , {useEffect , useState} from 'react'
import '../Styles/Remote.css'







function Rdata(){

    const [data , setData] =  useState([])
    const [data2 , setData2] =  useState([])

    const [sValue , setSValue] =  useState("")

    const handleSearch = (e) =>{
        setSValue(e.target.value)
        var  temp  =  data2;
        if(e.target.value != "")
        {
        var fdata =  temp.filter((el)=>{
            // return String(el.id).incl/udes(e.target.value)
            return el.id == e.target.value || el.title.includes(e.target.value)
       })
        setData(fdata)
    }
    if(e.target.value == "")
    {
        setData(data2)
    }

    }

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos').then(data => data.json()).then(response => {
        console.log(response)
        setData(response)
        setData2(response)
       })

       

    },[])


    return(
        <>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Search</span>
  </div>
  <input type="text" value={sValue} onChange={handleSearch} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Sr. N</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {data.map((el,index)=>(
    <tr key={index} >
      <th scope="row">{index + 1}</th>
      <td>{el.id}</td>
      <td>{el.title}</td>
      <td>{el.completed == true ? "Completed" : "Not Completed"}</td>
    </tr>
    ))}
  </tbody>
</table>
        
        
        </>
    )


}

export default Rdata