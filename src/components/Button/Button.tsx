/* eslint-disable @typescript-eslint/no-use-before-define */
import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from "react";
import styled, { css } from "styled-components";
import { transparentize, darken, lighten } from "polished";

import useButtonTheme from "./useButtonTheme";
import Spinner from "../Spinner";

type ButtonVariants = "primary" | "secondary" | "tertiary";

type ButtonTheme = "info" | "danger" | "success" | "default";

type ButtonSize = "medium" | "large";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Appearance of the button
   */
  variant?: ButtonVariants;
  /**
   * Appearance of the button
   */
  theme?: ButtonTheme;
  /**
   * Start Icon Component
   */
  startIcon?: JSX.Element;
  /**
   * End Icon Component
   */
  endIcon?: JSX.Element;
  children: React.ReactNode;
  /**
   * Controls the size of the button
   */
  size?: ButtonSize;
  /**
   * If `true` sets the width to 100%
   */
  fullWidth?: boolean;
  /**
   * If `true` Shows a loading indicator
   */
  isLoading?: boolean;

  shape?: "rounded" | "square" | "default";
  /**
   * If `false` will disable hover elevation animation.
   *
   * @default true
   */
  disabled?: boolean;
}

/**
 * @description
 * Change log:
 *
 * - `variant` is now `size` is now only "medium" & "large".
 *
 * - `kind` is replaced with `variant` and only supportes `primary`,`secondary` and `tertiary`.
 *
 * - added `theme` prop which determines the color of the button.
 * 
 * - fixed: loading state causing button to shrink.
 *
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "medium",
      variant = "primary",
      isLoading,
      type = "button",
      shape = "default",
      theme = "default",
      fullWidth,

      startIcon,
      endIcon,
      children,
      disabled,
      ...delegated
    },
    ref
  ) => {
    const { buttonSizeStyles, buttonTheme } = useButtonTheme();

    const styles = buttonSizeStyles[size] as CSSProperties;

    let Component = ButtonBase;

    if (variant === "primary") {
      Component = PrimaryButton;
    } else if (variant === "secondary") {
      Component = SecondaryButton;
    } else {
      Component = TertiaryButton;
    }
    return (
      <Component
        palette={buttonTheme[variant][theme]}
        ref={ref}
        shape={shape}
        type={type}
        fullWidth={fullWidth}
        style={styles}
        disabled={disabled || isLoading}
        {...delegated}
      >
        <InnerContainer isLoading={isLoading}>
          {startIcon ? <StartIconWrapper>{startIcon}</StartIconWrapper> : null}
          <ButtonText style={styles}>{children}</ButtonText>
          {endIcon ? <EndIconWrapper>{endIcon}</EndIconWrapper> : null}
        </InnerContainer>
        {isLoading && (
          <LoadingWrapper>
            <Spinner size={size === "large" ? 22 : 16} />
          </LoadingWrapper>
        )}
      </Component>
    );
  }
);
export default Button;

export type { ButtonProps, ButtonVariants };

const ButtonBase = styled.button<{
  palette: any;
  fullWidth?: boolean;
  shape?: "rounded" | "square" | "default";
}>`
  border-radius: 6px;
  position: relative;
  display: inline-block;
  font-size: var(--font-size);
  height: var(--height);
  font-weight: 500;
  font-family: inherit;
  transition: color 50ms ease, background 50ms ease;
  color: ${(p) => p.palette.text};

  ${(p) =>
    p.fullWidth &&
    css`
      display: "block";
      width: 100%;
    `}
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: ${(p) => p.palette.theme};
  border: 1px solid ${(p) => p.palette.theme};
  ${(p) => p.theme.queries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      background-color: ${(p) => darken(0.05, p.palette.theme)};
      border-color: ${(p) => darken(0.05, p.palette.theme)};
    }
  }
  &:active:not(:disabled) {
    background-color: ${(p) => darken(0.12, p.palette.theme)};
    border-color: ${(p) => darken(0.12, p.palette.theme)};
  }
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: default;
  }
`;
const SecondaryButton = styled(ButtonBase)`
  background-color: ${(p) => transparentize(0.7, p.palette.theme)};
  color: ${(p) => lighten(0.05, p.palette.text)};
  border: 1px solid ${(p) => p.palette.theme};
  ${(p) => p.theme.queries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      color: ${(p) => p.palette.text};
      background-color: ${(p) => transparentize(0.6, p.palette.theme)};
    }
  }
  &:active:not(:disabled) {
    background-color: ${(p) => transparentize(0.5, p.palette.theme)};
  }
`;
const TertiaryButton = styled(ButtonBase)`
  background-color: transparent;
  border: 1px solid transparent;
  ${(p) => p.theme.queries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      color: ${(p) => p.palette.text};
      background-color: ${(p) => transparentize(0.6, p.palette.theme)};
    }
  }
  &:active:not(:disabled) {
    background-color: ${(p) => transparentize(0.5, p.palette.theme)};
  }
`;

const InnerContainer = styled.span<{ isLoading?: boolean }>`
  visibility: ${(p) => (p.isLoading ? "hidden" : "visible")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ButtonText = styled.span`
  margin-left: var(--spacing);
  margin-right: var(--spacing);
`;
const StartIconWrapper = styled.span`
  margin-inline-start: var(--spacing);
`;
const EndIconWrapper = styled.span`
  margin-inline-end: var(--spacing);
`;
const LoadingWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Button.defaultProps = {
  theme: "default"
};
