import { createContext, useMemo } from "react";
import styled, { useTheme } from "styled-components";
import Control, { ToggleInput } from "./Control.Toggle";
import Text from "./Text.Toggle";

interface ToggleProps {
  /**
   * Controls the size of the toggle.
   *
   */
  size?: "m" | "l";
}

interface ParentComposition {
  Control: typeof Control;
  Text: typeof Text;
}

type TToggleContext = {
  size: "m" | "l";
};

export const ToggleContext = createContext<TToggleContext>({ size: "m" });

type TToggle = React.FC<ToggleProps> & ParentComposition;

const Toggle: TToggle = ({ size = "m", ...delegated }) => {
  const theme = useTheme();

  if (!theme) {
    throw new Error(
      '<Toggle /> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
    );
  }
  const value = useMemo(() => ({ size: size || "m" }), [size]);
  return (
    <ToggleContext.Provider value={value}>
      <Wrapper as="label" {...delegated} />
    </ToggleContext.Provider>
  );
};

export default Toggle;
Toggle.Control = Control;
Toggle.Text = Text;

export type { TToggleContext, ToggleProps, TToggle };
const Wrapper = styled.div`
  display: inline-flex;
  user-select: none;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  position: relative;
  cursor: pointer;
  &:has(${ToggleInput}:disabled) {
    opacity: 0.6;
    cursor: auto;
  }
`;
