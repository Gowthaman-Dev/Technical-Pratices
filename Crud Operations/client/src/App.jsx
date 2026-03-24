import React, { useEffect, useState } from 'react'

const App = () => {
  const [form,setForm] = useState({
    name:"",email:"",age:""
  })

  const [data,setData] = useState([])

  const [editId,setEditId] = useState(null)

  useEffect(()=>{
    const userdata = JSON.parse(localStorage.getItem("users"))
    if(userdata){
 setData(userdata)
    }
   
  },[])

  const handlechange =(e)=>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(data))
  },[data])

  const handlesubmit =(e)=>{
    e.preventDefault()
    if (editId !==null) {
      const updatedata = data.map((item)=>(
        item.id === editId ?{...form,id:editId}:item
      ))
      setData(updatedata)
      setEditId(null)
    } else {
      const newuser = {
      ...form,id:Date.now()
    }
    setData([...data,newuser])
    setForm({name:"",email:"",age:""})
    }
    
  }

  const handleedit =(item)=>{
    setForm({
      name:item.name,
      email:item.email,
      age:item.age
    })
    setEditId(item.id)
  }

  const handledelete =(id)=>{
    const filterdata = data.filter((item)=>item.id !== id)
    setData(filterdata)
  }

  return (
   
    <>
    <form onSubmit={handlesubmit} >
      <input type="text" placeholder='name' name='name' value={form.name} onChange={handlechange} />
      <input type="email" placeholder='email' name='email'  value={form.email} onChange={handlechange}/>
      <input type="number" placeholder='age' name='age'  value={form.age} onChange={handlechange}/>
      <button type='submit'>Add</button>
    </form>

    {data.map((item)=>(
      <div key={item.id}>
        <h1>{item.name}</h1>
        <h2>{item.email}</h2>
        <h3>{item.age}</h3>
        <button onClick={()=>handleedit(item)}>{editId!==null?"Update":"Edit"}</button>
        <button onClick={()=>handledelete(item.id)}>delete</button>
      </div>
    ))}
    </>
  )
}

export default App
