import { createContext, useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { Box, IBoxProps } from "../Box";
import Control, { RadioInput } from "./Control.Radio";
import Text from "./Text.Radio";

interface RadioProps {
  size?: "m" | "l";
}

interface ParentComposition {
  Control: typeof Control;
  Text: typeof Text;
}

type TRadioContext = {
  size: "m" | "l";
};

export const RadioContext = createContext<TRadioContext>({ size: "m" });

type TRadio = React.FC<RadioProps & IBoxProps> & ParentComposition;

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
const Radio: TRadio = ({ size = "m", ...delegated }) => {
  const theme = useTheme();

  if (!theme) {
    throw new Error(
      '<Radio /> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
    );
  }

  const contextValue = useMemo(() => ({ size: size || "m" }), [size]);
  return (
    <RadioContext.Provider value={contextValue}>
      {/* @ts-ignore */}
      <Wrapper render="label" {...delegated} />
    </RadioContext.Provider>
  );
};

export default Radio;

export type { TRadio, RadioProps, TRadioContext };

Radio.Control = Control;
Radio.Text = Text;

const Wrapper = styled(Box)`
  display: inline-flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 8px;
  position: relative;

  &:has(${RadioInput}:disabled) {
    opacity: 0.6;
  }
`;
