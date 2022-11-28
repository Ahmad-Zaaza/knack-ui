/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useMemo
} from "react";
import styled, { css } from "styled-components";
import { transparentize, darken } from "polished";

import useButtonTheme from "./useButtonTheme";
import Spinner from "../Spinner";
import { Tooltip, TooltipPosition } from "../Tooltip";

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
  /**
   * If `false` will disable hover elevation animation.
   *
   * @default true
   */
  tooltipProps?: {
    text: string;
    position?: TooltipPosition;
  };
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
 * - added tooltip support that can be configured using `tooltipProps`
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
      tooltipProps,
      startIcon,
      endIcon,
      style,
      children,
      disabled,
      ...delegated
    },
    ref
  ) => {
    const { buttonSizeStyles, buttonTheme } = useButtonTheme();

    const styles = buttonSizeStyles[size] as CSSProperties;

    let Component = PrimaryButton;

    if (variant === "secondary") {
      Component = SecondaryButton;
    } else if (variant === "tertiary") {
      Component = TertiaryButton;
    }
    const pallete = useMemo(() => {
      let variantPallete;
      if (!variant || !["primary", "secondary", "tertiary"].includes(variant)) {
        variantPallete = buttonTheme.primary;
      } else {
        variantPallete = buttonTheme[variant];
      }
      if (!theme || !["info", "success", "danger", "default"].includes(theme)) {
        return variantPallete.default;
      }
      return variantPallete[theme];
    }, [theme, buttonTheme, variant]);
    return (
      <Component
        palette={pallete}
        ref={ref}
        shape={shape}
        type={type}
        fullWidth={fullWidth}
        style={{ ...styles, ...style }}
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
            <Spinner size={size === "large" ? 16 : 12} />
          </LoadingWrapper>
        )}
        {typeof tooltipProps !== "undefined" && (
          <Tooltip position={tooltipProps.position}>
            {tooltipProps.text}
          </Tooltip>
        )}
      </Component>
    );
  }
);
export default Button;

export type { ButtonProps, ButtonVariants };

Button.defaultProps = {
  theme: "default"
};

const ButtonBase = styled.button<{
  palette: Record<string, string>;
  fullWidth?: boolean;
  shape?: "rounded" | "square" | "default";
}>`
  border-radius: ${(p) => p.theme.borderRadiuses.medium};
  position: relative;
  display: inline-block;
  font-size: var(--font-size);
  height: var(--height);
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: color 50ms ease, background 50ms ease;
  color: ${(p) => p.palette.text};

  ${(p) =>
    p.fullWidth &&
    css`
      display: "block";
      width: 100%;
    `}
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: default;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: ${(p) => p.palette.theme};
  border: 1px solid ${(p) => p.palette.theme};
  ${(p) => p.theme.mediaQueries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      background-color: ${(p) => darken(0.05, p.palette.theme)};
      border-color: ${(p) => darken(0.05, p.palette.theme)};
    }
  }
  &:active:not(:disabled) {
    background-color: ${(p) => darken(0.12, p.palette.theme)};
    border-color: ${(p) => darken(0.12, p.palette.theme)};
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background-color: ${(p) => transparentize(0.8, p.palette.theme)};
  color: ${(p) => p.palette.text};
  border: 1px solid ${(p) => transparentize(0.5, p.palette.theme)};
  ${(p) => p.theme.mediaQueries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      background-color: ${(p) => transparentize(0.7, p.palette.theme)};
    }
  }
  &:active:not(:disabled) {
    background-color: ${(p) => transparentize(0.6, p.palette.theme)};
  }
`;

const TertiaryButton = styled(ButtonBase)`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(p) => p.palette.text};
  ${(p) => p.theme.mediaQueries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      background-color: ${(p) => transparentize(0.8, p.palette.theme)};
    }
  }
  &:active:not(:disabled) {
    background-color: ${(p) => transparentize(0.7, p.palette.theme)};
  }
  &:disabled {
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
