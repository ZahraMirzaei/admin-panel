import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebarContext";
import { LangContextProvider } from "./store/langContext";
import { ThemeContextProvider } from "./store/themeContext";

ReactDOM.render(
  <ThemeContextProvider>
    <SidebarContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </SidebarContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
