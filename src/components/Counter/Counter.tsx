import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useMemo
} from "react";
import styled from "styled-components";
import useKnackTheme from "../../utils/useTheme";
import { CounterSize, CounterTheme } from "./Counter.types";

export interface ICounterProps extends ComponentPropsWithoutRef<"div"> {
  theme?: CounterTheme;
  size?: CounterSize;
}

const Counter = forwardRef<HTMLDivElement, ICounterProps>(
  ({ size = "medium", theme, style, children, ...delegated }, ref) => {
    const mainTheme = useKnackTheme();

    const counterSizeStyles = useMemo(
      () => ({
        small: {
          "--padding": "4px",
          "--height": "16px",
          "--min-w": "16px",
          "--font-size": `${10 / 16}rem`
        },
        medium: {
          "--padding": "2px 6px",
          "--height": "20px",
          "--min-w": "20px",
          "--font-size": `${12 / 16}rem`
        },
        large: {
          "--padding": "2px 6px",
          "--font-size": `${14 / 16}rem`,
          "--height": "24px",
          "--min-w": "24px"
        }
      }),
      []
    );

    const counterTheme = useMemo(
      () => ({
        default: {
          theme: mainTheme.colors.white,
          border: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[800]
        },
        info: {
          theme: mainTheme.colors.themes.info.color,
          border: mainTheme.colors.themes.info.color,
          text: mainTheme.colors.white
        },
        danger: {
          theme: mainTheme.colors.themes.danger.color,
          border: mainTheme.colors.themes.danger.color,
          text: mainTheme.colors.white
        },
        warning: {
          theme: mainTheme.colors.themes.warning.color,
          border: mainTheme.colors.themes.warning.color,
          text: mainTheme.colors.white
        },
        success: {
          theme: mainTheme.colors.themes.success.color,
          border: mainTheme.colors.themes.success.color,
          text: mainTheme.colors.white
        },
        white: {
          theme: mainTheme.colors.white,
          text: mainTheme.colors.gray[800],
          border: mainTheme.colors.white
        }
      }),
      []
    );

    const pallete = useMemo(() => {
      if (
        !theme ||
        !["info", "success", "danger", "warning", "default", "white"].includes(
          theme
        )
      ) {
        return counterTheme.default;
      }
      return counterTheme[theme];
    }, [theme]);
    return (
      <Wrapper
        style={{ ...counterSizeStyles[size], ...style } as CSSProperties}
        ref={ref}
        $pallete={pallete}
        {...delegated}
      >
        {children}
      </Wrapper>
    );
  }
);

export default Counter;

const Wrapper = styled.div<{
  $pallete: Record<"theme" | "border" | "text", string>;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  font-weight: 500;
  vertical-align: middle;
  padding: var(--padding);
  height: var(--height);
  min-width: var(--min-w);
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  background-color: ${(p) => p.$pallete.theme};
  border-color: ${(p) => p.$pallete.border};
  color: ${(p) => p.$pallete.text};
`;
