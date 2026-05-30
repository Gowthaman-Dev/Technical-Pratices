import React, {
  useState,
  useEffect
} from 'react'

import API from "../api/api"
import NavBar from './NavBar'
const DashBoard = () => {
  const [showdata, setShowData] =
    useState([])
  const token =
    localStorage.getItem("jwttoken")

  useEffect(() => {

    const fetchdata = async () => {

      try {

        const ress =
          await API.get(
            "/dashboardjob",
            {
              headers: {
                Authorization: token
              }
            }
          )

        setShowData(
          ress.data.getdatas
        )

      } catch (error) {

        console.log(error)
      }
    }

    fetchdata()

  }, [])

  return (
    <>
      <NavBar />

      <div>

        {showdata.map((e) => (

          <div key={e._id}>

            <h3>{e.name}</h3>

            <p>{e.email}</p>

            <p>{e.number}</p>

          </div>

        ))}

      </div>
    </>
  )
}

export default DashBoard