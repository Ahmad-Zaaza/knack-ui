/* eslint-disable @typescript-eslint/no-use-before-define */
import { CSSProperties, forwardRef } from "react";
import styled, { css } from "styled-components";
import { Box, IBoxProps } from "../Box";
import useTypographyStyles from "./useTypographyStyles";
import * as Polymorphic from "../../types/helpers";

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

type TypographyProps = {
  variant?: TypographyVariants;
  /**
   * Controls the typography color
   */
  color?: CSSProperties["color"];
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

type Props = TypographyProps & IBoxProps;

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
      textAlign,
      ...delegated
    },
    ref
  ) => {
    const styles = useTypographyStyles();
    return (
      <Text
        forwardedAs={as}
        fw={fontWeight}
        ref={ref}
        color={color}
        textAlign={textAlign}
        clamp={clamp}
        style={styles[variant]}
        {...delegated}
      >
        {children}
      </Text>
    );
  }
) as Polymorphic.ForwardRefComponent<"p", Props>;

export default Typography;

export type { TypographyProps, TypographyFontWeight, TypographyVariants };

Typography.defaultProps = {
  as: "p",
  variant: "body1"
};

const Text = styled(Box)<{
  fw?: TypographyProps["fontWeight"];
  clamp?: TypographyProps["clamp"];
  textAlign?: TypographyProps["textAlign"];
  color?: TypographyProps["color"];
}>`
  font-size: var(--fs);
  font-weight: ${(p) => p.fw || `var(--fw, 400)`};
  line-height: var(--lh);
  ${(p) =>
    p.color &&
    css`
      color: ${p.color};
    `}
  ${(p) =>
    p.textAlign &&
    css`
      text-align: ${p.textAlign};
    `}
  ${(p) =>
    p.clamp &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${p.clamp};
      overflow: hidden;
    `};
`;
