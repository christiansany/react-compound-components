import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import AccordionItem, { AccordionItemProps } from "./AccordionItem";
import AccordionToggle from "./AccordionToggle";
import AccordionPanel from "./AccordionPanel";
import { AccordionContext } from "./AccordionContext";

enum ActionType {
  OPEN_PANEL = "OPEN_PANEL",
  CLOSE_PANEL = "CLOSE_PANEL",
}

type Action = {
  type: ActionType;
  payload: {
    id: string;
  };
};

type AccordionState = { activePanels: string[] };

const reducer = (state: AccordionState, action: Action): AccordionState => {
  switch (action.type) {
    case ActionType.OPEN_PANEL:
      return {
        activePanels: [...state.activePanels, action.payload.id],
      };
    case ActionType.CLOSE_PANEL:
      const index = state.activePanels.findIndex(
        (panel) => panel === action.payload.id
      );
      if (index < 0) return state;
      return {
        activePanels: [
          ...state.activePanels.slice(0, index),
          ...state.activePanels.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

const initialState = {
  activePanels: [],
};

interface IAccordionProps {
  multiple?: boolean;
}

interface IAccordionComposition {
  Item: FunctionComponent<AccordionItemProps>;
  Toggle: FunctionComponent;
  Panel: FunctionComponent;
}

const Accordion: FunctionComponent<IAccordionProps> & IAccordionComposition = ({
  multiple = false,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleClick = useCallback(
    (id: string) => {
      if (state.activePanels.includes(id)) {
        dispatch({ type: ActionType.CLOSE_PANEL, payload: { id } });
      } else {
        if (!multiple) {
          dispatch({
            type: ActionType.CLOSE_PANEL,
            payload: { id: state.activePanels[0] },
          });
        }
        dispatch({ type: ActionType.OPEN_PANEL, payload: { id } });
      }
    },
    [state.activePanels.join()]
  );

  const value = useMemo(
    () => ({
      activePanels: state.activePanels,
      handleToggleClick,
    }),
    [state.activePanels.join(), handleToggleClick]
  );

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Toggle = AccordionToggle;
Accordion.Panel = AccordionPanel;

export default Accordion;
