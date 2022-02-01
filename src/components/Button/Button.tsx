
import {  ComponentPropsWithoutRef, forwardRef } from "react";
import useButtonClasses from "./useButtonClasses";

export interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, ...delegated }, ref) => {
    const { containerClasses } = useButtonClasses({className});
    return (
      <button ref={ref} className={containerClasses} {...delegated}>GENERATED FROM create.mjs</button>
    );
  }
);

export default Button;

