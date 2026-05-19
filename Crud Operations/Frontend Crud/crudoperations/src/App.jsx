import React, { useState } from 'react'

const App = () => {
  const [data,setData] = useState([])
  const [input,setInput]= useState("")
  const [editIndex,setEditIndex] = useState(null)

  const handlesubmit =()=>{
    if(input === '') return
    if (editIndex !== null) {
      const updatedData = data.map((item,index)=>
      editIndex===index?input:item)
      setData(updatedData)
      setEditIndex(null)
    }else{
    setData([...data,input])

    }
    setInput("")
  }

  const handleedit = (index)=>{
    setInput(data[index])
    setEditIndex(index)
  }

  const handledelete = (index)=>{
    const deleteItem = data.filter((_,i)=>i !== index)
    setData(deleteItem)
  }

  return (
    <>
    <div>
      <div>Crud Operations</div>
        
    </div>
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Value' />
      <button onClick={handlesubmit}>{editIndex !== null?"Updated":"Add"}</button>

      {data.map((item,index)=>(
        <div key={index}>
          <span>{item}</span>
          <div onClick={()=>handleedit(index)}>Edit</div>
          <div onClick={()=>handledelete(index)}>delete</div>
        </div>
      ))}
    </div>

    </>
  )
}

export default App
