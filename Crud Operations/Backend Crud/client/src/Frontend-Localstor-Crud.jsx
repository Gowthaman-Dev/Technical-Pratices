import React, { useEffect, useState } from 'react'

const App = () => {
  const [form, setForm] = useState({
    name: "", email: "", age: ""
  })

  const [data, setData] = useState([])
  const [editId, setEditId] = useState(null)

  // 🔥 LOAD (safe)
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("users")) || []
    setData(userdata)
  }, [])

  // 🔥 SAVE
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data))
  }, [data])

  // INPUT CHANGE
  const handlechange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // ✅ CREATE + UPDATE
  const handlesubmit = (e) => {
    e.preventDefault()

    if (editId !== null) {
      // UPDATE
      const updatedata = data.map((item) =>
        item.id === editId ? { ...form, id: editId } : item
      )
      setData(updatedata)
      setEditId(null)
    } else {
      // CREATE
      const newuser = {
        ...form,
        id: Date.now()
      }
      setData([...data, newuser])
    }

    // 🔥 CLEAR FORM (important)
    setForm({ name: "", email: "", age: "" })
  }

  // EDIT
  const handleedit = (item) => {
    setForm({
      name: item.name,
      email: item.email,
      age: item.age
    })
    setEditId(item.id)
  }

  // DELETE
  const handledelete = (id) => {
    const filterdata = data.filter((item) => item.id !== id)
    setData(filterdata)
  }

  return (
    <>
      {/* FORM */}
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" value={form.name} onChange={handlechange} placeholder="Name" />
        <input type="email" name="email" value={form.email} onChange={handlechange} placeholder="Email" />
        <input type="number" name="age" value={form.age} onChange={handlechange} placeholder="Age" />

        {/* ✅ Correct place */}
        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>

      <hr />

      {/* READ */}
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.email}</h2>
          <h3>{item.age}</h3>

          <button onClick={() => handleedit(item)}>Edit</button>
          <button onClick={() => handledelete(item.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App