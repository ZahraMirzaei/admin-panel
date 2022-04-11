import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import LoginContext from "../store/loginContext";

// interface Props {
//   isAuthenticated: boolean;
//   authenticationPath: string;
//   outlet: JSX.Element;
// }
const ProtectedRoute: React.FC = (props) => {
  const loginCtx = useContext(LoginContext);
  return loginCtx.isLogin ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
