import { useState } from "react"
import { useNavigate } from "react-router-dom"

import API from "../api/api"

const Login = () => {

  const navigate = useNavigate()

  const [loginform, setLoginForm] =
    useState({
      email: "",
      password: ""
    })

  // HANDLE CHANGE
  const handlechange = (e) => {

    const { name, value } = e.target

    setLoginForm({
      ...loginform,
      [name]: value
    })
  }

  // HANDLE SUBMIT
  const handlesubmit = async (e) => {

    e.preventDefault()

    // VALIDATION
    if (
      !loginform.email ||
      !loginform.password
    ) {
      return alert(
        "All Fields Required"
      )
    }

    try {

      const fetchdata =await API.post("/login",loginform)
      localStorage.setItem("jwttoken",fetchdata.data.token)

      alert(fetchdata.data.msg)

      navigate("/dashboard")

    } catch (error) {

      alert(error.response.data.msg)
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handlechange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handlechange}
        />

        <input
          type="submit"
          value="Login"
        />

      </form>

      <button
        onClick={() => {
          navigate("/register")
        }}
      >
        Register
      </button>
    </>
  )
}

export default Login