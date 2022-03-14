import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebarContext";
import { LangContextProvider } from "./store/langContext";

ReactDOM.render(
  <SidebarContextProvider>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </SidebarContextProvider>,
  document.getElementById("root")
);
