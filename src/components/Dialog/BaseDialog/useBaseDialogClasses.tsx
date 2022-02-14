import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../../tailwind.css";
import { IBaseDialogProps } from "./BaseDialog";

const clsx = classnames.bind(styles);
const useBaseDialogClasses = ({
  overlayClassName,
  dialogClassName,
  isOpen
}: Omit<IBaseDialogProps, "onClose">) => {
  const dialogClasses = useMemo(
    () => clsx("dialog", { "dialog-hidden": !isOpen }, dialogClassName),
    [isOpen]
  );
  const overlayClasses = useMemo(
    () =>
      clsx("dialog-overlay", { "dialog-overlay-hidden": !isOpen }, overlayClassName),
    [isOpen]
  );

  return {
    overlayClasses,
    dialogClasses
  };
};

export default useBaseDialogClasses;
