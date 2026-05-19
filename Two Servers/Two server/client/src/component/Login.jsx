import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const login = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                form
            )

            console.log(res.data)

            if (res.data.token) {
                localStorage.setItem("token", res.data.token)
                alert("Login Success ✅")
                navigate("/dashboard")
            } else {
                alert(res.data.msg)
            }

        } catch (err) {
            console.log(err)
            alert("Login Failed ❌")
        }
    }

    return (
        <>
            <h2>Login</h2>

            <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
            />

            <input
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
            />

            <button onClick={login}>Login</button>

            <p>
                Don't have account? <Link to="/register">Register</Link>
            </p>
        </>
    )
}

export default Login