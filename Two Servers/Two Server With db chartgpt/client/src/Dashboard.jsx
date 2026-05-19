import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [data, setData] = useState([])
  const [text, setText] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      alert("Login First ❌")
      navigate("/")
    } else {
      getData()
    }
  }, [])

  const getData = async () => {
    const token = localStorage.getItem("token")

    const res = await axios.get("http://localhost:7000/api/data/dashboard", {
      headers: { Authorization: token }
    })

    setData(res.data.data || [])
  }

  const addData = async () => {
    const token = localStorage.getItem("token")

    await axios.post(
      "http://localhost:7000/api/data/add",
      { content: text },
      { headers: { Authorization: token } }
    )

    setText("")
    getData()
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <>
      <h2>Dashboard 🔐</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Data"
      />
      <button onClick={addData}>Add</button>

      <ul>
        {data.map((e, i) => (
          <li key={i}>{e.content}</li>
        ))}
      </ul>
    </>
  )
}

export default Dashboard