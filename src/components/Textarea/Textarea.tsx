import {
  ComponentPropsWithoutRef,
  forwardRef,
  useMemo,
  CSSProperties
} from "react";
import styled, { css, useTheme } from "styled-components";

export interface ITextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  /**
   * Input size.
   * @default 'default'
   */
  size?: "small" | "large";

  error?: boolean | string;

  /**
   * Input  width. passing a number automatically converts to a pixel unit.
   *
   * If you wish to pass a string make sure to pass the unit as well.
   *
   * @example
   *
   * number example:
   * ```
   * <Textarea w={240} />
   * ```
   * string example:
   * ```
   * <Textarea w='50%' />
   * <Textarea w='8rem' />
   * ```
   */
  w?: number | string;
  resize?: CSSProperties["resize"];
}
/**
 * @description
 * Change log:
 *
 * - added new prop `w` that sets the input container width
 * 
 * - Remove `variant` prop and replace it with `size`
 *
 
 *
 */
const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ size, error, w, resize = "none", style, rows = 4, ...delegated }, ref) => {
    const mainTheme = useTheme();
    if (!mainTheme) {
      throw new Error(
        '<Textarea /> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
      );
    }
    const sizes = useMemo(
      () => ({
        small: {
          fontSize: `${14 / 16}rem`,
          spacing: "8px 12px"
        },

        large: {
          fontSize: `${16 / 16}rem`,
          spacing: "8px 8px 8px 12px"
        }
      }),
      []
    );

    const spacing = useMemo(() => {
      if (!size || !["small", "large"].includes(size)) {
        return sizes.large.spacing;
      }
      return sizes[size].spacing;
    }, [size]);

    const fontSize = useMemo(() => {
      if (!size || !["small", "large"].includes(size)) {
        return sizes.large.fontSize;
      }
      return sizes[size].fontSize;
    }, [size]);

    return (
      <div>
        <Input
          error={Boolean(error)}
          style={
            {
              "--spacing": spacing,
              "--font-size": fontSize,
              "--width": typeof w === "number" ? `${w}px` : w,
              resize,
              ...style
            } as CSSProperties
          }
          ref={ref}
          rows={rows}
          {...delegated}
        />

        {typeof error === "string" ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : null}
      </div>
    );
  }
);

export default Textarea;

const ErrorMessage = styled.span`
  color: ${(p) => p.theme.colors.red["500"]};
  font-size: ${13 / 16}rem;
  margin-top: 8px;
  display: block;
`;

const Input = styled.textarea<{
  error: boolean;
}>`
  overflow: auto;
  height: auto;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 1px;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.gray["200"]};
  outline: none;
  line-height: 1.3;
  --focus-color: 202 100% 58%;

  padding: var(--spacing);
  font-size: var(--font-size);
  background-color: transparent;
  ${(p) =>
    !p.readOnly &&
    css`
      &:focus-within {
        box-shadow: 0 0 0 3px hsla(var(--focus-color) / 0.3);
        border-color: hsl(var(--focus-color));
      }
    `}
  ${(p) =>
    p.readOnly &&
    css`
      background-color: ${p.theme.colors.gray["50"]};
    `}
  ${(p) =>
    p.error &&
    css`
      --focus-color: 347deg 100% 41%;
      border-color: ${p.theme.colors.red["500"]};
      &:focus-within {
        box-shadow: 0 0 0 3px hsla(var(--focus-color) / 0.3);
      }
    `}
  ${(p) =>
    p.disabled &&
    css`
      opacity: 0.45;
    `}
`;
