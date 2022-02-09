
import { ComponentPropsWithoutRef, forwardRef } from "react";
import useRadioClasses from "./useRadioClasses";

export interface IRadioProps extends ComponentPropsWithoutRef<"input"> {
  
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  ({ className, ...delegated }, ref) => {
    const { containerClasses } = useRadioClasses({className});
    return (
      <input ref={ref} className={containerClasses} {...delegated}/>
    );
  }
);

export default Radio;

