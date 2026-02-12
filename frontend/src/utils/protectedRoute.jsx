import { Navigate } from "react-router-dom";
import { retrieveItem } from "./localStorageMethods";

const ProtectedRoute = ({ children }) => {
  const isAuth = retrieveItem("Email");
  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
