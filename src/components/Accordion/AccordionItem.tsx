import React, { FunctionComponent, ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";
import { AccordionItemContext } from "./AccordionItemContext";

type ActionItemRenderProps = {
  id: string;
  isActive: boolean;
};

export type AccordionItemProps = {
  id: string;
  children: ReactNode | ((props: ActionItemRenderProps) => ReactNode);
};

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  id,
  children,
}) => {
  const { activePanels } = useAccordionContext();
  const isActive = activePanels.includes(id);
  const toggleId = `accordion-toggle-${id}`;
  const panelId = `accordion-panel-${id}`;
  return (
    <AccordionItemContext.Provider value={{ id, isActive, toggleId, panelId }}>
      {children instanceof Function ? children({ id, isActive }) : children}
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
