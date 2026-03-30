import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  // token இருந்தா page காட்டு, இல்லன்னா login-க்கு அனுப்பு
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;