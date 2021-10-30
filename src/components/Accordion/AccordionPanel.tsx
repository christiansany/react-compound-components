import React, { FunctionComponent } from "react";
import { useAccordionItemContext } from "./AccordionItemContext";

const AccordionPanel: FunctionComponent = ({ children }) => {
  const { isActive, toggleId, panelId } = useAccordionItemContext();
  return (
    <section
      id={panelId}
      aria-labelledby={toggleId}
      hidden={!isActive}
      className="bg-gray-200 rounded-lg my-1 text-left p-5"
    >
      {children}
    </section>
  );
};

export default AccordionPanel;
