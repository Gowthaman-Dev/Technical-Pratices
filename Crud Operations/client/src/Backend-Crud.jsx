import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [form, setForm] = useState({
    name: "", email: "", age: ""
  })

  const [data, setData] = useState([])
  const [editid, setEditId] = useState(null)

  const handlechange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    try {
      if (editid) {
        await axios.put(`http://localhost:5000/api/crud/${editid}`, form)
        setEditId(null)
      } else {
        await axios.post("http://localhost:5000/api/crud/create", form)
      }

      setForm({ name: "", email: "", age: "" })
      fetchdata()

    } catch (err) {
      console.log(err)
    }
  }

  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/crud")
      setData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const handleedit = (item) => {
    setForm({
      name: item.name,
      email: item.email,
      age: item.age
    })
    setEditId(item._id)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/crud/${id}`)
      fetchdata()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter Name' value={form.name} onChange={handlechange} name='name' />
        <input type="email" placeholder='Enter Email' value={form.email} onChange={handlechange} name='email' />
        <input type="number" placeholder='Enter Age' value={form.age} onChange={handlechange} name='age' />

        <button>
          {editid ? "Update" : "Add"}
        </button>
      </form>

      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <h2>{item.email}</h2>
          <h3>{item.age}</h3>

          <button onClick={() => handleedit(item)}>Edit</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App