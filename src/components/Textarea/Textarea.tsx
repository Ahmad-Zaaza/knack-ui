import { ComponentPropsWithoutRef, forwardRef } from "react";
import useTextareaClasses from "./useTextareaClasses";

export interface ITextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  /**
   * Input size.
   * @default 'default'
   */
  variant?: "small" | "default";
  /**
   * Input prefix. Can be a symbol or an icon. colored by primary color
   */
  error?: boolean | string;
  /**
   * className applied to input container
   */
  className?: string;
  /**
   * className applied to input element
   */
  inputClassName?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      className,
      variant = "default",
      error,
      disabled,
      inputClassName,
      ...delegated
    },
    ref
  ) => {
    const {
      containerClasses,
      inputClasses,

      inputErrorWrapperClasses
    } = useTextareaClasses({
      className,
      variant,
      error,
      disabled,
      inputClassName
    });
    const sizes = {
      small: {
        padding: 8
      },
      default: {
        padding: 12
      }
    };
    return (
      <>
        <div
          style={{
            // @ts-ignore
            "--padding": `${sizes[variant].padding}px`
          }}
          className={containerClasses}
        >
          <textarea
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            {...delegated}
          />
        </div>
        {typeof error === "string" ? (
          <span className={inputErrorWrapperClasses}>{error}</span>
        ) : null}
      </>
    );
  }
);

export default Textarea;
