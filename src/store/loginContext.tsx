import React from "react";
import { useLocalStorage } from "usehooks-ts";

type TContext = {
  isLogin: boolean;
  toggleLogin: () => void;
};

const LoginContext = React.createContext<TContext>({
  isLogin: false,
  toggleLogin: () => {},
});

export const LoginContextProvider: React.FC = (props) => {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);

  function toggleLogin() {
    setIsLogin((prev) => !prev);
  }

  const loginValue: TContext = {
    isLogin: isLogin,
    toggleLogin: toggleLogin,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
