import React, { useState, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import { useOnClickOutside } from "usehooks-ts";
import classes from "./LangBox.module.scss";

function LangBox() {
  const [lang, setLang] = useState("en");
  const [showLangBox, setShowLangBox] = useState(false);

  const langBoxRef = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = useCallback(() => {
    // If the menu is open and the clicked target is not within the menu,
    // then close the menu
    if (showLangBox && langBoxRef.current) {
      setShowLangBox(false);
    }
    console.log("show or hide");
  }, [showLangBox]);

  //custom hook
  useOnClickOutside(langBoxRef, checkIfClickedOutside);

  const showBoxHandler = function toDo() {
    setShowLangBox((prev) => !prev);
  };

  return (
    <div className={classes.lang} ref={langBoxRef}>
      <div className={classes.lanBox} onClick={showBoxHandler}>
        <Icon icon="clarity:language-line" color="#424750" width="20" />

        <div className={classes.lang_slc}>{lang}</div>

        <Icon icon="ep:arrow-down-bold" color="#424750" width="10" />
      </div>
      <div
        className={`${classes.lang_menu} ${showLangBox ? classes.show : ""}`}
      >
        <div>English (en)</div>
        <div>Farsi (fa)</div>
      </div>
    </div>
  );
}

export default LangBox;
