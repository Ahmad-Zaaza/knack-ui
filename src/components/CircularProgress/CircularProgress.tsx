import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useEffect,
  useMemo,
  useState
} from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);

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
   * Controls the progress color.
   *
   * Accepts `primary` and `secondary` values
   */
  color?: CSSProperties["color"] | "primary" | "secondary";
  /**
   * Control showing percentage text or not.
   *
   * font size is relative to the circular progress size
   */
  showText?: boolean;
}

const CircularProgress = forwardRef<SVGSVGElement, ICircularProgressProps>(
  (
    {
      size = 40,
      strokeWidth = 2,
      percentage = 0,
      color = "primary",
      showText,
      style,
      ...delegated
    },
    ref
  ) => {
    const [progress, setProgress] = useState(0);
    const viewBox = useMemo(() => `0 0 ${size} ${size}`, [size]);
    const radius = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
    const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

    // clipping the track
    const dash = useMemo(
      () => (progress * circumference) / 100,
      [progress, circumference]
    );
    // 🖌 Applying color to enable the use of `currentColor`
    const barClasses = useMemo(
      () =>
        clsx({
          "!text-primary": color === "primary",
          "!text-secondary": color === "secondary"
        }),
      [color]
    );
    // 🎨 enables animation transition from 0 to `percantage`
    useEffect(() => {
      setProgress(percentage);
    }, [percentage]);
    return (
      <svg
        style={{ fontSize: `${size}px`, ...style }}
        ref={ref}
        width={size}
        height={size}
        viewBox={viewBox}
        {...delegated}
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
          className={barClasses}
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
            transition: "all 0.5s",
            color: color === "primary" && color === "secondary" ? "" : color
          }}
        />
        {showText ? (
          <text
            fill="black"
            fontSize="0.2em"
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
          >
            {`${percentage}%`}
          </text>
        ) : null}
      </svg>
    );
  }
);

export default CircularProgress;
