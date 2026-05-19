import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form)

    if (res.data.token) {
      localStorage.setItem("token", res.data.token)
      alert("Login Success ✅")
      navigate("/dashboard")
    } else {
      alert(res.data.msg)
    }
  }

  return (
    <>
      <h2>Login</h2>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={login}>Login</button>

      <p>
        Don't have account? <Link to="/register">Register</Link>
      </p>
    </>
  )
}

export default Login