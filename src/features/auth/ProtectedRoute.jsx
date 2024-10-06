import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuth) navigateTo("/login");
  }, [isAuth, navigateTo]);

  return <div>{children}</div>;
};

export default ProtectedRoute;
