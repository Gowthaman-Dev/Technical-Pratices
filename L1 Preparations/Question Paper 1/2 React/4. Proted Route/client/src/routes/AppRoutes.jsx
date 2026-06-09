import { Routes, Route } from "react-router-dom";
import Register  from "../pages/Register";
import Login     from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/"          element={<Register />} />
      <Route path="/login"     element={<Login />} />

      {/* Dashboard => PrivateRoute-ல wrap பண்ணாலே protect ஆகும் */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;