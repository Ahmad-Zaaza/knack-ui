import composeRefs from "@seznam/compose-react-refs";
import { forwardRef, useEffect, useRef, useState } from "react";
import useLoaderClasses, {
  LoaderTypes
} from "../../lib/hooks/useLoaderClasses";
import * as Polymorphic from "../../types/helpers";
import useButtonClasses from "./useButtonClasses";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "primaryOutline"
  | "secondaryOutline"
  | "ghostOutline"
  | "danger"
  | "warning"
  | "success"
  | "default"
  | "defaultOutline";

interface ButtonProps {
  /**
   * Appearance of the button
   */
  kind?: ButtonVariants;
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
  variant?: "xsmall" | "small" | "medium" | "large";
  /**
   * If `true` sets the width to 100%
   */
  fullWidth?: boolean;
  /**
   * If `true` Shows a loading indicator
   */
  isLoading?: boolean;
  /**
   * If `true` Shows a loading indicator
   */
  loaderType?: LoaderTypes;
  /**
   * If `true` will render an Icon button
   */
  iconOnly?: boolean;

  shape?: "rounded" | "square";
  /**
   * If `false` will disable hover elevation animation.
   *
   * @default true
   */
  elevationAnimation?: boolean;
}

const Button = forwardRef(
  (
    {
      className,
      variant = "medium",
      kind = "primary",
      isLoading,
      as: Component = "button",
      type = "button",
      shape,
      fullWidth,
      iconOnly,
      elevationAnimation,
      startIcon,
      loaderType = "Dual Ring",
      endIcon,
      children,
      ...delegated
    },
    ref
  ) => {
    const loaderClasses = useLoaderClasses({ loader: loaderType });
    const { containerClasses, startIconClasses, endIconClasses } =
      useButtonClasses({
        className,
        variant,
        kind,
        shape,
        isLoading,
        fullWidth,
        iconOnly,
        elevationAnimation
      });
    const [dims, setDims] = useState<{
      width: string | number;
      height: string | number;
    }>({
      width: "auto",
      height: "auto"
    });
    const innerRef = useRef<HTMLButtonElement | null>(null);
    const dimsRef = useRef<{
      width: string | number;
      height: string | number;
    }>({ height: "auto", width: "auto" });

    useEffect(() => {
      if (!isLoading) {
        const dim = innerRef?.current?.getBoundingClientRect();

        dimsRef.current = {
          height: dim?.height as number,
          width: dim?.width as number
        };
        setDims({
          height: dim?.height as number,
          width: dim?.width as number
        });
      }
    }, [variant, children, isLoading]);

    useEffect(() => {
      if (isLoading) {
        setDims({
          height: dimsRef.current.height,
          width: dimsRef.current.width
        });
      }
    }, [isLoading]);
    return (
      <Component
        ref={composeRefs(innerRef, ref)}
        className={containerClasses}
        type={type}
        style={{ ...(isLoading && { width: dims.width, height: dims.height }) }}
        {...delegated}
      >
        {startIcon ? (
          <span className={startIconClasses}>{startIcon}</span>
        ) : null}
        {isLoading ? <div className={loaderClasses} /> : children}
        {endIcon ? <span className={endIconClasses}>{endIcon}</span> : null}
      </Component>
    );
  }
) as Polymorphic.ForwardRefComponent<"button", ButtonProps>;
export default Button;

export type { ButtonProps, ButtonVariants };
