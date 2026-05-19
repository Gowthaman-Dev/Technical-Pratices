import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        // 🔐 protect page
        if (!token) {
            alert("Please Login First ❌")
            navigate("/")
        } else {
            getData()
        }
    }, [])

    const getData = async () => {
        try {
            const token = localStorage.getItem("token")

            const res = await axios.get(
                "http://localhost:7000/api/data/dashboard",
                {
                    headers: { Authorization: token }
                }
            )

            if (res.data.msg) {
                setData(res.data.data || [res.data.msg])
            }

        } catch (err) {
            console.log(err)
            alert("Error ❌")
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <>
            <h2>Dashboard 🔐</h2>

            <button onClick={logout}>Logout</button>

            <ul>
                {data.map((e, i) => (
                    <li key={i}>{e}</li>
                ))}
            </ul>
        </>
    )
}

export default Dashboard