import {
  ComponentPropsWithoutRef,
  
  forwardRef,
  useEffect,
  useMemo,
  useState
} from "react";
import styled, { useTheme } from "styled-components";

export interface ICircularProgressProps
  extends ComponentPropsWithoutRef<"svg"> {
  /**
   * Controls the size of the Circular progress.
   *
   */
  size?: number;
  /**
   * Specify the border thickness of the Circular progress.
   *
   */
  strokeWidth?: number;
  /**
   * Controls the completed percentage.
   */
  percentage: number;

  /**
   * if `true`, color will be set depending on the percentage itself via manipulating the HSL color wheel.
   *
   */
  dynamicColors?: boolean;
  /**
   * Control showing percentage text or not.
   *
   * font size is relative to the circular progress size
   */
  showText?: boolean;
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
const CircularProgress = forwardRef<SVGSVGElement, ICircularProgressProps>(
  (
    {
      size = 40,
      strokeWidth = 2,
      percentage = 0,

      dynamicColors,
      showText,
      style,
      ...delegated
    },
    ref
  ) => {
    const mainTheme = useTheme();
    if (!mainTheme) {
      throw new Error(
        '<CircularProgress /> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
      );
    }
    const [progress, setProgress] = useState(0);
    const viewBox = useMemo(() => `0 0 ${size} ${size}`, [size]);
    const radius = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
    const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

    // clipping the track
    const dash = useMemo(
      () => (progress * circumference) / 100,
      [progress, circumference]
    );

    // 🎨 enables animation transition from 0 to `percantage`
    useEffect(() => {
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
        width={size}
        height={size}
        viewBox={viewBox}
        aria-valuenow={percentage}
        aria-valuemax={100}
        aria-valuemin={0}
        {...delegated}
        role="progressbar"
      >
        <circle
          fill="none"
          stroke="#ccc"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke="currentColor"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          // @ts-ignore
          strokeDasharray={[dash, circumference - dash]}
          style={{
            transition: "all 0.5s"
          }}
        />
        {showText ? (
          <text
            fill="black"
            fontSize="0.15em"
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
          >
            {`${percentage}%`}
          </text>
        ) : null}
      </Wrapper>
    );
  }
);

export default CircularProgress;

const Wrapper = styled.svg`
  color: var(--color, currentColor);
`;
