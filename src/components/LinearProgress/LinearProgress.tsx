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
   * Controls the progress color.
   *
   * Accepts `primary` and `secondary` values
   */
  color?: CSSProperties["color"] | "primary" | "secondary";
  /**
   * Control showing percentage text or not.
   *
   * font size is relative to the Linear progress height
   */
  showPercentage?: boolean;
}

const LinearProgress = forwardRef<SVGSVGElement, ILinearProgressProps>(
  (
    {
      size = 20,
      className,
      percentage = 0,
      color = "primary",
      showPercentage,
      style,
      ...delegated
    },
    ref
  ) => {
    const [progress, setProgress] = useState(0);

    // clipping the track

    // 🖌 Applying color to enable the use of `currentColor`
    const svgClasses = useMemo(
      () =>
        clsx(
          {
            "!text-primary": color === "primary",
            "!text-secondary": color === "secondary",
            "text-success": color === "dynamic" && percentage >= 90,
            "text-warning":
              color === "dynamic" && percentage >= 25 && percentage < 90,
            "text-error": color === "dynamic" && percentage < 25
          },
          className
        ),
      [color, className, percentage]
    );
    // 🎨 enables animation transition from 0 to `percantage`
    useEffect(() => {
      // Prevent overflow edge cut
      if (percentage > 100) {
        return setProgress(100);
      }
      setProgress(percentage);
    }, [percentage]);
    return (
      <svg
        style={{ fontSize: `${size}px`, ...style }}
        ref={ref}
        width="100%"
        height={size}
        aria-valuenow={percentage}
        aria-valuemax={100}
        aria-valuemin={0}
        {...delegated}
        className={svgClasses}
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
            transition: "all 0.5s",
            color: color === "primary" && color === "secondary" ? "" : color
          }}
        />
        {showPercentage ? (
          <text
            fill="white"
            fontSize="0.8em"
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

export default LinearProgress;
