import React, {createContext, useState, ReactNode, useContext} from 'react';

const TechContext = createContext({
  techClicked: 0,
  setTechClicked: (index: number) => {},
});

export const useTechContext = () => useContext(TechContext);

export const TechProvider = ({children}: {children: ReactNode}) => {
  const [techClicked, setTechClicked] = useState(0);

  return (
    <TechContext.Provider value={{techClicked, setTechClicked}}>{children}</TechContext.Provider>
  );
};
