import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { IDividerProps } from "./Divider.types";

const Divider = forwardRef<HTMLSpanElement, IDividerProps>(
  ({ variant = "primary", orientation }, ref) => (
    <Wrapper orientation={orientation} variant={variant} ref={ref} />
  )
);

export default Divider;

const Wrapper = styled.span<{
  orientation: IDividerProps["orientation"];
  variant: IDividerProps["variant"];
}>`
  --direction: 90deg;
  --color: ${(p) => p.theme.colors.gray[200]};
  --bg-size: 5px 1px;

  display: block;
  width: 100%;
  height: 1px;
  ${(p) =>
    p.orientation === "vertical" &&
    css`
      --direction: 180deg;
      --bg-size: 1px 5px;

      height: auto;
      min-height: 100%;
      width: 1px;
      align-self: stretch;
      flex-shrink: 0;
    `}

  ${(p) =>
    p.variant === "primary" &&
    css`
      background-color: var(--color);
    `}
  ${(p) =>
    p.variant === "secondary" &&
    css`
      background-image: linear-gradient(
        var(--direction),
        var(--color) 3px,
        transparent 0
      );
      background-size: var(--bg-size);
    `}
`;
