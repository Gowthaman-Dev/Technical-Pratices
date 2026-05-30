import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import API from '../api/api'

const Register = () => {

  const navigate = useNavigate()

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      number: "",
      password: ""
    })

  // HANDLE CHANGE
  const handlechange = (e) => {

    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  // HANDLE SUBMIT
  const handlesubmit = async (e) => {

    e.preventDefault()

    // VALIDATION
    if (
      !form.name ||
      !form.email ||
      !form.number ||
      !form.password
    ) {
      return alert(
        "All Fields Required"
      )
    }

    try {

      const fetchdata =
        await API.post(
          "/register",
          form
        )

      alert(fetchdata.data.msg)

      navigate("/")

    } catch (error) {

      alert(error.response.data.msg)
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>

        <input
          type="text"
          name='name'
          value={form.name}
          placeholder='Enter Name'
          onChange={handlechange}
        />

        <input
          type="email"
          name='email'
          value={form.email}
          placeholder='Enter Email'
          onChange={handlechange}
        />

        <input
          type="text"
          name='number'
          value={form.number}
          placeholder='Enter Number'
          onChange={handlechange}
        />

        <input
          type="password"
          name='password'
          value={form.password}
          placeholder='Enter Password'
          onChange={handlechange}
        />

        <input
          type="submit"
          value="Register"
        />

      </form>
    </>
  )
}

export default Register