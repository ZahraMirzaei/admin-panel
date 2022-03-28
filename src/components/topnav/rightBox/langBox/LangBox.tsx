import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { Icon } from "@iconify/react";
import { useOnClickOutside } from "usehooks-ts";
import LangContext from "../../../../store/langContext";

import classes from "./LangBox.module.scss";

function LangBox() {
  const [showLangBox, setShowLangBox] = useState(false);
  const langBoxRef = useRef<HTMLDivElement>(null);
  const langCtx = useContext(LangContext);
  const lang = langCtx.lang;

  const showBoxHandler = function toDo() {
    setShowLangBox((prev) => !prev);
  };
  useEffect(() => {
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    document.documentElement.lang = lang === "en" ? "en" : "fa";
  }, [lang]);
  const checkIfClickedOutside = useCallback(() => {
    // If the menu is open and the clicked target is not within the menu,
    // then close the menu
    if (showLangBox && langBoxRef.current) {
      setShowLangBox(false);
    }
  }, [showLangBox]);

  //custom hook - when click outside of langbox, it will close.
  useOnClickOutside(langBoxRef, checkIfClickedOutside);

  return (
    <div className={classes.lang} ref={langBoxRef}>
      <div className={classes.lanBox} onClick={showBoxHandler}>
        <Icon icon="clarity:language-line" width="20" />

        <div className={classes.lang_slc}>{lang}</div>

        <Icon icon="ep:arrow-down-bold" width="10" />
      </div>
      <div
        className={`${classes.lang_menu} ${showLangBox ? classes.show : ""}`}
      >
        <div
          onClick={() => {
            langCtx.toggleLanguage("en");
            showBoxHandler();
          }}
        >
          English (en)
        </div>
        <div
          onClick={() => {
            langCtx.toggleLanguage("fa");
            showBoxHandler();
          }}
        >
          Farsi (fa)
        </div>
      </div>
    </div>
  );
}

export default LangBox;
