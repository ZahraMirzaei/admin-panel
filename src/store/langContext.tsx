import React, { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type langContextObj = {
  lang: string | null;
  toggleLanguage: () => void;
};

const LangContext = React.createContext<langContextObj>({
  lang: "en",
  toggleLanguage: () => {},
});

//--Provider
export const LangContextProvider: React.FC = (props) => {
  const [lang, setLang] = useLocalStorage("language", "en");

  function toggleLanguage() {
    setLang((prev) => {
      return prev === "en" ? "fa" : "en";
    });
  }

  const langValue: langContextObj = {
    lang,
    toggleLanguage,
  };

  return (
    <LangContext.Provider value={langValue}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContext;
