/* eslint-disable @typescript-eslint/no-use-before-define */
import { CSSProperties, forwardRef, useCallback } from "react";
import styled, { css, useTheme } from "styled-components";
import { Box } from "../Box";
import useTypographyStyles from "./useTypographyStyles";
import * as Polymorphic from "../../types/helpers";
import {
  BuiltInColorPalettesKeys,
  ExtendableCSSProps,
  PaletteDegrees,
  SemanticThemes,
  ThemeColors
} from "../../theme/theme.types";

type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "body3"
  | "subtitle1"
  | "subtitle2"
  | "caption";

type TypographyFontWeight =
  | "900"
  | "800"
  | "700"
  | "600"
  | "500"
  | "400"
  | "300"
  | "200"
  | "100";

type UsableThemeColors = Pick<
  ThemeColors,
  | "primary"
  | "onPrimary"
  | "secondary"
  | "onSecondary"
  | "gray"
  | "blue"
  | "green"
  | "red"
  | "text"
> & {
  themes: {
    [K in SemanticThemes]: string;
  };
};

type PathImpl<T, K extends keyof T> = K extends string | number
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
      : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
    : K
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

type TypographyColor = CSSProperties["color"] | Path<UsableThemeColors>;
// type TypographyColor = Path<UsableThemeColors>;

type TypographyBaseProps = {
  variant?: TypographyVariants;
  /**
   * Controls the typography color
   */
  color?: TypographyColor;
  /**
   * Controls the typography font weight
   */
  fontWeight?: TypographyFontWeight;
  /**
   * Controls `text-align` CSS property.
   */
  textAlign?: CSSProperties["textAlign"];
  /**
   * Applies `line-clamp` to the element.
   */
  clamp?: number;

  // tag?: keyof typeof TagsMap;
};

type TypographyProps = TypographyBaseProps &
  Pick<ExtendableCSSProps, "my" | "mx" | "mb" | "mt" | "display" | "flex"> &
  React.ComponentPropsWithoutRef<"p">;

/**
 * @description
 * change log:
 *
 * - changed font size scaling, with clamp functionality.
 *
 * - `fontWeight` now only accepts numbers as strings.
 *
 * - added a new `body3` variant to have more versatility.
 *
 */
const Typography = forwardRef(
  (
    {
      as = "p",
      variant = "body1",
      children,
      fontWeight,
      color,
      clamp,
      style,
      my,
      mb,
      mt,
      mx,
      textAlign,
      display,
      flex,
      ...delegated
    },
    ref
  ) => {
    const { indentStyles, textStyles } = useTypographyStyles({
      mb,
      mt,
      mx,
      display,
      flex,
      my
    });

    const { knackTheme } = useTheme();

    const getColor = useCallback(() => {
      if (!color) return;

      if (["themes."].find((c) => color.includes(c))) {
        const extractedKey = color.split(".");
        return knackTheme.colors.themes[extractedKey[1] as SemanticThemes]
          .color;
      }
      if (["gray", "blue", "red.", "green"].find((c) => color.includes(c))) {
        const extractedKey = color.split(".");
        return knackTheme.colors[extractedKey[0] as BuiltInColorPalettesKeys][
          extractedKey[1] as PaletteDegrees
        ];
      }
      if (
        ["primary", "secondary", "onPrimary", "onSecondary"].includes(color)
      ) {
        return knackTheme.colors[
          color as "primary" | "secondary" | "onPrimary" | "onSecondary"
        ];
      }
      return color;
    }, [color, knackTheme]);

    return (
      <Text
        forwardedAs={as}
        $fw={fontWeight}
        ref={ref}
        color={getColor()}
        $textAlign={textAlign}
        $clamp={clamp}
        $indentStyles={indentStyles}
        style={{ ...textStyles[variant], ...style }}
        {...delegated}
      >
        {children}
      </Text>
    );
  }
) as Polymorphic.ForwardRefComponent<"p", TypographyProps>;

export default Typography;

export type {
  TypographyBaseProps,
  TypographyFontWeight,
  TypographyProps,
  TypographyVariants
};

Typography.defaultProps = {
  as: "p",
  variant: "body1"
};

const Text = styled(Box)<{
  $fw?: TypographyProps["fontWeight"];
  $clamp?: TypographyProps["clamp"];
  $textAlign?: TypographyProps["textAlign"];
  color?: TypographyColor;
  $indentStyles?: {};
}>`
  font-size: var(--fs);
  font-weight: ${(p) => p.$fw || `var(--fw, 400)`};
  line-height: var(--lh);
  ${(p) =>
    p.color &&
    css`
      color: ${p.color};
    `}
  ${(p) =>
    p.$textAlign &&
    css`
      text-align: ${p.$textAlign};
    `}
  ${(p) =>
    p.$clamp &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${p.$clamp};
      overflow: hidden;
    `};
  ${(p) => p.$indentStyles && css(p.$indentStyles)}
`;
