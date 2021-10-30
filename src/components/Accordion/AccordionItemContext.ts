import React, { useContext } from "react";

interface IAccordionItemContext {
  id: string;
  isActive: boolean;
  toggleId: string;
  panelId: string;
}

export const AccordionItemContext =
  React.createContext<IAccordionItemContext | null>(null);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("AccordionItemContext is not provided");
  }
  return context;
};
