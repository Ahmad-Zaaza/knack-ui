import { forwardRef } from "react";
import styled, { css } from "styled-components";
import * as Polymorphic from "../../types/helpers";
import { IBoxProps } from "./Box.types";
import useBoxProps from "./useBoxProps";

/**
 * @description
 *
 * Change log:
 *
 *
 * - Replace `as` prop with `render`.
 *
 * - add `elevation` prop that controls box's surface elevation
 *
 * - add `paper` prop to control the box background-color, best used with elevation.
 *
 * - added dynamic spacing properties.
 */
const Box = forwardRef(({ render, ...props }, ref) => {
  const { indentStyles, otherProps, elevationStyles } = useBoxProps(props);
  return (
    <Wrapper
      as={render}
      ref={ref}
      styles={indentStyles}
      elevationStyles={elevationStyles}
      {...otherProps}
    />
  );
}) as Polymorphic.ForwardRefComponent<"div", IBoxProps>;

export default Box;

export type { IBoxProps };

const Wrapper = styled.div<{ styles: {}; elevationStyles: {} }>`
  ${(p) => p.styles && css(p.styles)};
  ${(p) => p.elevationStyles && css(p.elevationStyles)};
  /* ${(p) => p.theme.elevations[p.theme.mode][1]} */
`;
