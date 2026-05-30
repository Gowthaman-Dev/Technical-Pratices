import DashBoard from "../Components/DashBoard"
import Login from "../Components/Login"
import Register from "../Components/Register"
import { Routes, Route, Navigate } from "react-router-dom"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default AppRoutes

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwttoken")
  return token ? children : <Navigate to="/" />
}
