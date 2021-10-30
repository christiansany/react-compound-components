import React, { FunctionComponent } from "react";
import { useAccordionContext } from "./AccordionContext";
import { useAccordionItemContext } from "./AccordionItemContext";

const AccordionToggle: FunctionComponent = ({ children }) => {
  const { id, isActive, toggleId, panelId } = useAccordionItemContext();
  const { handleToggleClick } = useAccordionContext();
  return (
    <button
      id={toggleId}
      type="button"
      aria-expanded={isActive ? "true" : "false"}
      aria-controls={panelId}
      onClick={() => handleToggleClick(id)}
      className="
        block
        w-full
        p-3
        my-1
        rounded-lg
        text-white
        bg-gradient-to-r
        from-blue-600
        to-pink-800
        focus:ring-4
      "
    >
      {children}
    </button>
  );
};

export default AccordionToggle;
