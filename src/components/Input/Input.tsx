/* eslint-disable @typescript-eslint/no-use-before-define */
import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";
import { COLORS } from "../../styles/constants";

export interface IInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  /**
   * Input size.
   * @default 'default'
   */
  size?: "small" | "default" | "large";
  /**
   * Input prefix. Can be a symbol or an icon. colored by primary color
   */
  inputPrefix?: JSX.Element;
  /**
   * Input suffix. Can be a symbol or an icon. colored by primary color
   */
  inputSuffix?: JSX.Element;
  /**
   * Toggle input error state by providing a `boolean` to error text directly
   */
  error?: boolean | string;
  /**
   * className applied to input container
   */
  className?: string;
  /**
   * className applied to input element
   */
  inputClassName?: string;
  /**
   * style applied to input element
   */
  inputStyle?: CSSProperties;

  /**
   * Input container width. passing a number automatically converts to a pixel unit.
   *
   * If you wish to pass a string make sure to pass the unit as well.
   *
   * @example
   *
   * number example:
   * ```
   * <Input w={240} />
   * ```
   * string example:
   * ```
   * <Input w='50%' />
   * <Input w='8rem' />
   * ```
   */
  w?: number | string;
  /**
   * input variant
   */
}

/**
 * @description
 * Change log:
 *
 * - added new prop `w` that sets the input container width
 * 
 * - Remove `variant` prop
 *
 
 *
 */
const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      w,
      error,
      inputClassName,
      inputPrefix: InputPrefix,
      inputSuffix: InputSuffix,
      disabled,
      size = "default",
      inputStyle,
      readOnly,
      ...delegated
    },
    ref
  ) => {
    const sizes = {
      small: {
        height: 32,
        iconSize: 32,
        fontSize: `${14 / 16}rem`,
        spacing: 8
      },
      default: {
        height: 40,
        iconSize: 40,
        fontSize: `${16 / 16}rem`,
        spacing: 10
      },
      large: {
        height: 44,
        fontSize: `${16 / 16}rem`,
        iconSize: 44,
        spacing: 12
      }
    };
    const mainTheme = useTheme();
    if (!mainTheme) {
      throw new Error(
        '<Input/> must be inside <ThemeProvider/> with a value, import {ThemeProvider} from "knack-ui" '
      );
    }

    return (
      <>
        <Wrapper
          style={
            {
              "--input-height": `${sizes[size].height}px`,
              "--icon-size": `${sizes[size].iconSize}px`,
              "--width": typeof w === "number" ? `${w}px` : w
            } as CSSProperties
          }
          error={Boolean(error)}
          disabled={disabled}
          readOnly={readOnly}
          className={className}
        >
          {InputPrefix ? (
            <Adornment
              style={
                {
                  "--spacing": `${sizes[size].spacing}px`
                } as CSSProperties
              }
              tabIndex={-1}
            >
              {InputPrefix}
            </Adornment>
          ) : null}
          <TextInput
            ref={ref}
            readOnly={readOnly}
            style={
              {
                "--spacing": `${sizes[size].spacing}px`,
                "--font-size": `${sizes[size].fontSize}`,
                ...inputStyle
              } as CSSProperties
            }
            startNeighbor={Boolean(InputPrefix)}
            endNeighbor={Boolean(InputSuffix)}
            className={inputClassName}
            disabled={disabled}
            {...delegated}
          />
          {InputSuffix ? (
            <Adornment
              tabIndex={-1}
              style={
                {
                  "--spacing": `${sizes[size].spacing}px`
                } as CSSProperties
              }
            >
              {InputSuffix}
            </Adornment>
          ) : null}
        </Wrapper>
        {typeof error === "string" ? (
          <ErrorMessage role="alert">{error}</ErrorMessage>
        ) : null}
      </>
    );
  }
);

export default Input;

Input.defaultProps = {
  w: "100%"
};

const Wrapper = styled.div<{
  error: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}>`
  height: var(--input-height);
  width: var(--width);
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 1px;
  border-radius: 6px;
  border: 1px solid ${COLORS.gray["200"]};
  
  --focus-color: 202 100% 58%;
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

const Adornment = styled.span`
  padding: 0 var(--spacing);
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.span`
  color: ${(p) => p.theme.colors.red["500"]};
  font-size: ${13 / 16}rem;
  margin-top: 8px;
  display: block;
`;

const TextInput = styled.input<{
  startNeighbor: boolean;
  endNeighbor: boolean;
}>`
  width: 100%;
  min-width: 0;
  height: 100%;
  border: none;
  padding: var(--spacing);
  outline: none;
  font-size: var(--font-size);
  background-color: transparent;

  ${(p) =>
    p.startNeighbor &&
    css`
      padding-inline-start: 0;
    `}
  ${(p) =>
    p.endNeighbor &&
    css`
      padding-inline-end: 0;
    `};
`;
