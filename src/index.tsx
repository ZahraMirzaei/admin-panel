import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebarContext";
import { LangContextProvider } from "./store/langContext";
import { ThemeContextProvider } from "./store/themeContext";
import { LoginContextProvider } from "./store/loginContext";

ReactDOM.render(
  <LangContextProvider>
    <LoginContextProvider>
      <ThemeContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </ThemeContextProvider>
    </LoginContextProvider>
  </LangContextProvider>,
  document.getElementById("root")
);
