import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useMemo,
  useState
} from "react";
import styled, { useTheme } from "styled-components";

export interface ILinearProgressProps extends ComponentPropsWithoutRef<"svg"> {
  /**
   * Controls the size of the Linear progress.
   *
   */
  size?: number;
  /**
   * Controls the completed percentage.
   */
  percentage: number;

  /**
   * Control showing percentage text or not.
   *
   * font size is relative to the Linear progress height
   */
  showPercentage?: boolean;
  /**
   * if `true`, color will be set depending on the percentage itself via manipulating the HSL color wheel.
   *
   */
  dynamicColors?: boolean;
  /**
   * Text to show inside the bar, will override `showPercentage` props when passed
   */
  barInnerText?: string;
}

/**
 * @description
 *
 * Change log:
 *
 * - remove `dynamic` color props
 *
 * - add new `dynamic` boolean prop to indicate that the colors should be dynamic as the percentage
 */
const LinearProgress = forwardRef<SVGSVGElement, ILinearProgressProps>(
  (
    {
      size = 20,

      percentage = 0,

      dynamicColors,
      showPercentage,
      barInnerText,
      style,
      ...delegated
    },
    ref
  ) => {
    const mainTheme = useTheme();
    if (!mainTheme) {
      throw new Error(
        '<LinearProgress /> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
      );
    }
    const [progress, setProgress] = useState(0);

    // clipping the track

    // 🎨 enables animation transition from 0 to `percantage`
    useEffect(() => {
      // Prevent overflow edge cut
      if (percentage > 100) {
        return setProgress(100);
      }
      setProgress(percentage);
    }, [percentage]);

    const colors = useMemo(() => {
      if (!dynamicColors) {
        return { "--color": mainTheme.colors.primary };
      }
      return {
        "--color": `hsl(${percentage + Math.round(percentage / 4)},100%, 50%)`
      };
    }, [dynamicColors, percentage]);
    return (
      <Wrapper
        style={{ fontSize: `${size}px`, ...colors, ...style }}
        ref={ref}
        width="100%"
        height={size}
        aria-valuenow={percentage}
        aria-valuemax={100}
        aria-valuemin={0}
        {...delegated}
        role="progressbar"
      >
        <rect
          fill="currentColor"
          style={{ opacity: "20%" }}
          x={0}
          y={0}
          rx="5"
          ry="5"
          width="100%"
          height="100%"
        />
        <rect
          rx="5"
          ry="5"
          fill="currentColor"
          width={`${progress}%`}
          height="100%"
          style={{
            transition: "all 0.5s"
          }}
        />
        {barInnerText || showPercentage ? (
          <text
            fill="white"
            fontSize="0.8em"
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
          >
            {`${barInnerText || `${percentage}%`}`}
          </text>
        ) : null}
      </Wrapper>
    );
  }
);

export default LinearProgress;
const Wrapper = styled.svg`
  color: var(--color, currentColor);
`;
