import { forwardRef } from "react";
import styled, { css } from "styled-components";
import * as Polymorphic from "../../types/helpers";
import { IBoxProps } from "./Box.types";
import useBoxProps from "./useBoxProps";

const Box = forwardRef(({ render, ...props }, ref) => {
  const { indentStyles, otherProps } = useBoxProps(props);
  return (
    <Wrapper as={render} ref={ref} styles={indentStyles} {...otherProps} />
  );
}) as Polymorphic.ForwardRefComponent<"div", IBoxProps>;

export default Box;

export type { IBoxProps };

const Wrapper = styled.div<{ styles: {} }>`
  ${(p) => p.styles && css(p.styles)}
`;
