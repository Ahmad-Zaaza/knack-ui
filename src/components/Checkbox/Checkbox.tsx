import { createContext, useMemo } from "react";
import styled from "styled-components";
import useKnackTheme from "../../utils/useTheme";
import { Box, IBoxProps } from "../Box";
import Control, { CheckboxInput } from "./Control.Checkbox";
import Text from "./Text.Checkbox";

interface CheckboxProps {
  size?: "m" | "l";
}

interface ParentComposition {
  Control: typeof Control;
  Text: typeof Text;
}

type TCheckboxContext = {
  size: "m" | "l";
};

export const CheckboxContext = createContext<TCheckboxContext>({ size: "m" });

type TCheckbox = React.FC<CheckboxProps & IBoxProps> & ParentComposition;

/**
 *
 * @description
 *
 * Change log:
 *
 *
 * - remove `color` prop
 *
 * - remove `small` size
 *
 * - change checkmark implementation.
 */
const Checkbox: TCheckbox = ({ size = "m", ...delegated }) => {
  useKnackTheme();

  const contextValue = useMemo(() => ({ size }), [size]);
  return (
    <CheckboxContext.Provider value={contextValue}>
      <Wrapper forwardedAs="label" {...delegated} />
    </CheckboxContext.Provider>
  );
};

export default Checkbox;

export type { TCheckbox, CheckboxProps, TCheckboxContext };

Checkbox.Control = Control;
Checkbox.Text = Text;

const Wrapper = styled(Box)`
  display: inline-flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 8px;
  position: relative;
  user-select: none;

  &:has(${CheckboxInput}:disabled) {
    opacity: 0.6;
  }
`;
