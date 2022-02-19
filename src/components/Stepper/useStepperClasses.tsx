import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IStepperProps } from "./Stepper";

const clsx = classnames.bind(styles);
const useStepperClasses = ({ className }: IStepperProps) => {
  const stepperClasses = useMemo(() => clsx("stepper", className), [className]);

  return {
    stepperClasses
  };
};

export default useStepperClasses;
