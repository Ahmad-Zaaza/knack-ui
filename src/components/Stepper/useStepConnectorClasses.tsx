import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useStepConnectorClasses = ({
  active,
  completed,
  vertical
}: {
  active: boolean;
  completed: boolean;
  vertical: boolean;
}) => {
  const connectorClasses = useMemo(
    () =>
      clsx({
        "step-connector--vertical": vertical,
        "step-connector--horizontal": !vertical,
        "step-connector--active": active,
        "step-connector--completed": completed
      }),
    [active, completed, vertical]
  );
  return {
    connectorClasses
  };
};

export default useStepConnectorClasses;
