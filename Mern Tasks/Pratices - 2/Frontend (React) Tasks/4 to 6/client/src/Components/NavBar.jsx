import {
  Link,
  useNavigate
} from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  const handleclick = () => {

    localStorage.removeItem(
      "jwttoken"
    )

    navigate("/")
  }

  return (
    <>
      <div>

        <h1>LOGO</h1>

        <Link to="/">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <button onClick={handleclick}>
          Logout
        </button>

      </div>
    </>
  )
}

export default NavBar