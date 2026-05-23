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


// Mind la vachika vendiya main points

// 1️⃣ 3 state dhaan main
// const [form, setForm]

// 👉 input values store

// const [data, setData]

// 👉 backend la iruka full data

// const [editid, setEditId]

// 👉 which item editing nu remember

// 2️⃣ handlechange
// setForm({ ...form, [name]: value })

// 👉 typing pannumbothu form update

// Memory line:

// 👉 "input type → form update"

// 3️⃣ handlesubmit
// e.preventDefault()

// 👉 form reload stop

// 4️⃣ Edit mode check
// if(editid)

// 👉 id irundha update

// 👉 இல்லனா create

// Memory line:

// 👉 "id இருந்தா update"

// 5️⃣ CREATE API
// axios.post()

// 👉 new user backend ku send pannum

// Memory line:

// 👉 "post means add"

// 6️⃣ UPDATE API
// axios.put()

// 👉 existing user update pannum

// Memory line:

// 👉 "put means update"

// 7️⃣ fetchdata()
// axios.get()

// 👉 backend la iruka data edukkum

// setData(res.data)

// 👉 frontend la store pannum

// Memory line:

// 👉 "get means fetch data"

// 8️⃣ useEffect
// useEffect(() => {
//   fetchdata()
// }, [])

// 👉 app open aagumbothu data load

// Memory line:

// 👉 "open app → fetch data"

// 9️⃣ handleedit
// setForm(...)

// 👉 clicked item input la fill aagum

// setEditId(item._id)

// 👉 edit mode on

// Memory line:

// 👉 "edit click → form fill + id save"

// 🔟 DELETE API
// axios.delete()

// 👉 selected item delete pannum

// Memory line:

// 👉 "delete means remove"

// 1️⃣1️⃣ fetchdata() after create/update/delete

// 👉 latest data again load pannum
// Memory line:

// 👉 "after change → fetch again"

// 1️⃣2️⃣ Form clear
// setForm({ name:"", email:"", age:"" })

// 👉 submit/update aprm input empty

// Memory line:

// 👉 "submit mudincha clear form"