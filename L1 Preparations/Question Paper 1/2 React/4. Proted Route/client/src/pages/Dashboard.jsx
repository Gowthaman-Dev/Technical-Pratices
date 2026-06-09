import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`, // Backend-க்கு token அனுப்பு
          },
        });
        setData(res.data);
      } catch (error) {
        // Token invalid-ஆ? Remove பண்ணி login-க்கு அனுப்பு
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {data && <p>Welcome, {data.currentUser.name}!</p>}
      {data && data.users.map((u) => (
        <div key={u._id}>{u.name} - {u.email}</div>
      ))}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;