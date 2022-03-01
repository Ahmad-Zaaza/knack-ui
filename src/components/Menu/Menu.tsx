import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from "react";

export type AbsolutePositions = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

interface MenuContextProps {
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  popoverPosition: AbsolutePositions;
  setPopoverPosition: Dispatch<SetStateAction<AbsolutePositions>>;
}

export const MenuContext =
  createContext<MenuContextProps | undefined>(undefined);

const Menu: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({});
  const contextValue = useMemo(
    () => ({
      setActive,
      active,
      popoverPosition,
      setPopoverPosition,
      open,
      setOpen
    }),
    [setActive, active, setPopoverPosition, popoverPosition, open, setOpen]
  );
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export default Menu;

export const useMenuContext = () => {
  const stepperContext = useContext(MenuContext);
  if (stepperContext === undefined)
    throw new Error("Contents Must be placed inside `Menu` component");
  return stepperContext;
};
