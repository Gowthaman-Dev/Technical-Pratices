import React, { useEffect, useState } from "react";

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // API FETCH
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {

        setUsers(data);

        setLoading(false);
      });

  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>API Fetch Example</h1>

      {loading ? (

        <h2>Loading...</h2>

      ) : (

        users.map((user) => (
          <div key={user.id}>

            <h3>{user.name}</h3>
            <p>{user.email}</p>

          </div>
        ))

      )}

    </div>
  );
};

export default App;



// Mind la vachika vendiya main points

// 1️⃣ useState
// const [users, setUsers] = useState([])

// 👉 API data store panna

// Memory line:

// 👉 "array data store panna []"

// 2️⃣ Loading state
// const [loading, setLoading] = useState(true)

// 👉 loading status track panna

// true = loading running
// false = loading finished

// Memory line:

// 👉 "starting la loading true"

// 3️⃣ useEffect
// useEffect(() => {}, [])

// 👉 component load ஆன உடனே run ஆகும்

// [] empty dependency

// 👉 one time மட்டும் run

// Memory line:

// 👉 "empty array = first render only"

// 4️⃣ fetch()
// fetch("API_URL")

// 👉 API call send pannum

// Memory line:

// 👉 "fetch means get data"

// 5️⃣ res.json()
// res.json()

// 👉 response JSON ah convert pannum

// Memory line:

// 👉 "json convert panna json()"

// 6️⃣ setUsers(data)
// setUsers(data)

// 👉 API data state la save ஆகும்

// Memory line:

// 👉 "API data → state"

// 7️⃣ setLoading(false)
// setLoading(false)

// 👉 loading complete

// Memory line:

// 👉 "data vandha loading false"

// 8️⃣ Conditional Rendering
// loading ? (...) : (...)

// 👉 condition based UI show pannum

// loading true → Loading...
// loading false → data show

// Memory line:

// 👉 "question mark condition check"

// 9️⃣ map()
// users.map((user) => {})

// 👉 array loop pannum

// every user ku UI create ஆகும்

// Memory line:

// 👉 "map means repeat UI"

// 🔟 key={user.id}
// key={user.id}

// 👉 React unique identify panna use pannum

// Memory line:

// 👉 "key always unique"

// 1️⃣1️⃣ Display data
// {user.name}
// {user.email}

// 👉 API values screen la show ஆகும்

// Memory line:

// 👉 "curly braces value display"

// 1️⃣2️⃣ Full Flow
// Component Load
// ↓
// useEffect run
// ↓
// fetch API
// ↓
// data receive
// ↓
// setUsers(data)
// ↓
// setLoading(false)
// ↓
// UI re-render
// ↓
// data display

// Memory line:

// 👉 "state update → UI update"