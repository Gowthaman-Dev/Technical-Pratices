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

// 1️⃣ 3 state dhaan main
// const [form, setForm]

// 👉 input values store

// const [data, setData]

// 👉 full users store

// const [editId, setEditId]

// 👉 which user editing nu remember

// 2️⃣ First useEffect
// localStorage la iruka data load pannum

  // JSON.parse(localStorage.getItem("users"))

// 👉 app open aagumbothu old data varum

// Memory line:

// 👉 "open app → load localStorage"

// 3️⃣ Second useEffect
// localStorage.setItem()

// 👉 data change aana save pannum

// Memory line:

// 👉 "data change → auto save"

// 4️⃣ handlechange
// setForm({ ...form, [name]: value })

// 👉 typing pannumbothu form update

// Memory line:

// 👉 "input type → form update"

// 5️⃣ Edit mode check
// if(editId !== null)

// 👉 edit modeனா update

// 👉 இல்லனா create

// Memory line:

// 👉 "id இருந்தா update"

// 6️⃣ Create logic
// setData([...data, newuser])

// 👉 old users + new user add

// Memory line:

// 👉 "spread old data, add new user"

// 7️⃣ Update logic
// data.map()

// 👉 matching id item replace

// item.id === editId ? updated : item

// Memory line:

// 👉 "same idனா replace"

// 8️⃣ Update complete
// setEditId(null)

// 👉 edit mode off

// Memory line:

// 👉 "null means add mode"

// 9️⃣ Delete logic
// data.filter()

// 👉 selected item remove

// Memory line:

// 👉 "filter remove pannum"

// 🔟 Edit button work
// setForm(...)

// 👉 clicked item input box la fill aagum

// setEditId(item.id)

// 👉 which item editing save aagum

// Memory line:

// 👉 "edit click → form fill + id save"

// 1️⃣1️⃣ Form clear
// setForm({ name:"", email:"", age:"" })

// 👉 submit/update aprm input empty

// Memory line:

// 👉 "submit mudincha clear form"  