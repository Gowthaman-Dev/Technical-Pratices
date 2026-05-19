import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Register = ()=>{

  const navigate = useNavigate()

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      )

      alert(res.data.msg)

      if(res.data.msg === "Registered Successfully"){
        navigate("/")   // login page
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{textAlign:"center"}}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Name" 
          onChange={handleChange}
        /><br/><br/>

        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange}
        /><br/><br/>

        <input 
          name="password" 
          placeholder="Password" 
          onChange={handleChange}
        /><br/><br/>

        <button type="submit">Register</button>
      </form>

      <Link to="/">Login</Link>
    </div>

  )
}

export default Register