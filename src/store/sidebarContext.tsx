import React, { useState } from "react";

type SidebarContextObj = { isOpen: boolean; toggleSidebar: () => void };

const SidebarContext = React.createContext<SidebarContextObj>({
  isOpen: true,
  toggleSidebar: () => {},
});

export const SidebarContextProvider: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  function ToggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  const contextValue: SidebarContextObj = {
    isOpen,
    toggleSidebar: ToggleSidebar,
  };
  return (
    <SidebarContext.Provider value={contextValue}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
