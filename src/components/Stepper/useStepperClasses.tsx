import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IStepperProps } from "./Stepper";

const clsx = classnames.bind(styles);
const useStepperClasses = ({ className, vertical }: IStepperProps) => {
  const stepperClasses = useMemo(
    () =>
      clsx(
        "stepper",
        { "flex-col": vertical, "stepper-vertical": vertical },
        className
      ),
    [className, vertical]
  );

  return {
    stepperClasses
  };
};

export default useStepperClasses;
