import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../../tailwind.css";
import { IBaseDialogProps } from "./BaseDialog";

const clsx = classnames.bind(styles);
const useBaseDialogClasses = ({
  dialogClassName,
  isOpen,
  animationType,
  active
}: Omit<IBaseDialogProps, "onClose"> & { active: boolean }) => {
  const dialogClasses = useMemo(
    () =>
      clsx(
        "dialog",
        {
          "dialog-active": isOpen && active,
          "dialog-fadeUp": animationType === "fadeUp",
          "dialog-fadeIn": animationType === "fade"
        },
        dialogClassName
      ),
    [isOpen, active]
  );

  return {
    dialogClasses
  };
};

export default useBaseDialogClasses;
