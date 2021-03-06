import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useStepClasses = ({
  active,
  completed,
  vertical
}: {
  active: boolean;
  completed: boolean;
  vertical: boolean;
}) => {
  const stepClasses = useMemo(
    () =>
      clsx("step", {
        "step-horizontal": !vertical,
        "step-vertical": vertical,
        "step--active": active,
        "step--completed": completed
      }),
    [active, completed, vertical]
  );

  return {
    stepClasses
  };
};

export default useStepClasses;
