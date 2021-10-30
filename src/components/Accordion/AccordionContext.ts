import React, { useContext } from "react";

interface IAccordionContext {
  activePanels: string[];
  handleToggleClick: (id: string) => void;
}

export const AccordionContext = React.createContext<IAccordionContext | null>(
  null
);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContext is not provided");
  }
  return context;
};
