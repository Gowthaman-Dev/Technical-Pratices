import { useEffect, useState } from 'react'

const App = () => {
    const [show,setShow]=useState([])
    const [load,setLoad] = useState(true)
    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(res=>res.json())
         .then(data =>{
            setShow(data)
            setLoad(false)
         })
    },[])
  return (
    <>
    {load?(<h1>
        Loading.................
    </h1>):(show.map((e)=>(
        <div key={e.id}>
            {e.name}
        </div>
    )))}
    </>
  )
}

export default App