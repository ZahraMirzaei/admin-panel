import React from "react";
import { useLocalStorage } from "usehooks-ts";

type langContextObj = {
  lang: string | null;
  toggleLanguage: (sLang: string) => void;
};

const LangContext = React.createContext<langContextObj>({
  lang: "",
  toggleLanguage: (slang) => {},
});

//--Provider
export const LangContextProvider: React.FC = (props) => {
  const [lang, setLang] = useLocalStorage("language", "en");

  function toggleLanguage(sLang: string) {
    setLang(sLang);
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
