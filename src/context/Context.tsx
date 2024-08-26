import React, { createContext, useState, ReactNode } from "react";

export const TechContext = createContext({
  techClicked: 0,
  setTechClicked: (index: number) => {},
});

export const TechProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [techClicked, setTechClicked] = useState(0);

  return (
    <TechContext.Provider value={{ techClicked, setTechClicked }}>
      {children}
    </TechContext.Provider>
  );
};
