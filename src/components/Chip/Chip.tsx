import { transparentize } from "polished";
import { forwardRef, CSSProperties, useMemo } from "react";
import styled from "styled-components";
import * as Polymorphic from "../../types/helpers";
import DeleteIcon from "./DeleteIcon";
import useChipTheme from "./useChipTheme";

type TChipVariants = "primary" | "secondary" | "tertiary";

type ChipTheme = "info" | "danger" | "success" | "neutral" | "primary";

interface ChipProps {
  className?: string;
  /**
   * The variant to use.
   */
  variant?: TChipVariants;
  /**
   * The theme to use.
   */
  theme?: ChipTheme;
  /**
   * Chip border radius
   */
  shape?: "square" | "rounded" | "semi-rounded";

  /**
   * Controls Chip size
   */
  size?: "small" | "medium";
  /**
   * Start Icon Component
   */
  startIcon?: JSX.Element;
  /**
   * End Icon Component
   */
  endIcon?: JSX.Element;

  /**
   * passing this function shows
   */
  onDelete?: () => void;
}

/**
 * @description
 * Change log:
 *
 * - `variant` now only accepts `primary` and `secondary`
 *
 * - added `theme` prop that determines the theme of the Chip
 *
 *
 */

const Chip = forwardRef(
  (
    {
      children,
      variant,
      size = "medium",
      startIcon,
      endIcon,
      theme = "primary",
      style,
      shape,
      onDelete,
      ...delegated
    },
    ref
  ) => {
    const { chipSizeStyles, chipTheme } = useChipTheme();

    const pallete = useMemo(() => {
      let variantPallete;
      if (!variant || !["primary", "secondary", "tertiary"].includes(variant)) {
        variantPallete = chipTheme.primary;
      } else {
        variantPallete = chipTheme[variant];
      }
      if (!theme || !["info", "success", "danger", "primary"].includes(theme)) {
        return variantPallete.primary;
      }
      return variantPallete[theme];
    }, [theme, chipTheme, variant]);

    let Component = PrimaryChip;

    if (variant === "secondary") {
      Component = SecondaryChip;
    } else if (variant === "tertiary") {
      Component = TertiaryChip;
    }
    return (
      <Component
        corners={shape}
        palette={pallete}
        style={
          { ...chipSizeStyles[size || "medium"], ...style } as CSSProperties
        }
        ref={ref}
        {...delegated}
      >
        {startIcon ? <StartIconWrapper>{startIcon}</StartIconWrapper> : null}
        <ChipText>{children}</ChipText>
        {typeof onDelete === "undefined" && endIcon ? (
          <EndIconWrapper>{endIcon}</EndIconWrapper>
        ) : null}
        {typeof onDelete !== "undefined" ? (
          <EndIconWrapper>
            <DeleteIcon onClick={onDelete} size={size === "medium" ? 18 : 14} />
          </EndIconWrapper>
        ) : null}
      </Component>
    );
  }
) as Polymorphic.ForwardRefComponent<"div", ChipProps>;

export default Chip;

export type { ChipProps };

const ChipBase = styled.div<{
  palette: Record<string, string>;
  corners: ChipProps["shape"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: ${(p) =>
    p.corners === "semi-rounded"
      ? p.theme.knackTheme.borderRadiuses.large
      : p.corners === "square"
      ? 0
      : p.corners === "rounded"
      ? "50px"
      : p.theme.knackTheme.borderRadiuses.medium};
  font-size: var(--font-size);
  height: var(--height);
`;

const PrimaryChip = styled(ChipBase)`
  background-color: ${(p) => p.palette.theme};
  color: ${(p) => p.palette.text};
  fill: ${(p) => p.palette.text};
  border: 1px solid transparent;
`;
const SecondaryChip = styled(ChipBase)`
  background-color: ${(p) => transparentize(0.7, p.palette.theme)};
  color: ${(p) => p.palette.text};
  fill: ${(p) => p.palette.text};
  border: 1px solid ${(p) => p.palette.theme};
`;
const TertiaryChip = styled(ChipBase)`
  background-color: ${(p) => transparentize(0.8, p.palette.theme)};
  color: ${(p) => p.palette.text};
  fill: ${(p) => p.palette.text};
  border: 1px solid transparent;
`;
const ChipText = styled.span`
  margin-left: var(--spacing);
  margin-right: var(--spacing);
  white-space: nowrap;
`;
const StartIconWrapper = styled.span`
  margin-inline-start: var(--spacing);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const EndIconWrapper = styled.span`
  margin-inline-end: var(--spacing);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
