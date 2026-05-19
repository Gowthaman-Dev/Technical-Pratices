  import React, { useState } from 'react'

  const App = () => {

    const [form, setForm] = useState({
      name: "", email: "", age: ""
    })

    const [data, setData] = useState([])
    const [editId, setEditId] = useState(null)

    // Input change
    const handleChange = (e) => {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
    }

    // CREATE + UPDATE
    const handleSubmit = (e) => {
      e.preventDefault()

      if (editId !== null) {
        // ✅ UPDATE
        const updatedData = data.map((item) =>
          item.id === editId ? { ...form, id: editId } : item
        )
        setData(updatedData)
        setEditId(null)
      } else {
        // ✅ CREATE
        const newUser = {
          ...form,
          id: Date.now()
        }
        setData([...data, newUser])
      }

      // clear form
      setForm({ name: "", email: "", age: "" })
    }

    // EDIT CLICK
    const handleEdit = (item) => {
      setForm({
        name: item.name,
        email: item.email,
        age: item.age
      })
      setEditId(item.id)
    }

    return (
      <>
        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />

          <button>
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <hr />

        {/* READ */}
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.age}</h3>

            {/* UPDATE BUTTON */}
            <button onClick={() => handleEdit(item)}>
              Edit
            </button>
          </div>
        ))}
      </>
    )
  }

  export default App