import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../../tailwind.css";

const clsx = classnames.bind(styles);
const useStepClasses = ({
  active,
  completed
}: {
  active: boolean;
  completed: boolean;
}) => {
  const stepClasses = useMemo(
    () =>
      clsx("step", { "step--active": active, "step--completed": completed }),
    [active, completed]
  );
  const connectorClasses = useMemo(
    () =>
      clsx("step-connector", {
        "step-connector--active": active,
        "step-connector--completed": completed
      }),
    [active, completed]
  );
  return {
    stepClasses,
    connectorClasses
  };
};

export default useStepClasses;
