import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../../tailwind.css";
import { TConfirmationDialogProps } from "./ConfirmationDialog";

const clsx = classnames.bind(styles);
const useConfirmationDialogClasses = ({
  className
}: Pick<TConfirmationDialogProps,any>) => {
  const containerClasses = useMemo(() => clsx("confirmation-dialog",className), []);

  return {
    containerClasses
  };
};

export default useConfirmationDialogClasses;
