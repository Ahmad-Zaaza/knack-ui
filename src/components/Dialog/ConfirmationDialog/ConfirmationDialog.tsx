import { ComponentPropsWithoutRef, forwardRef } from "react";
import BaseDialog, { IBaseDialogProps } from "../BaseDialog/BaseDialog";
import { ModalHead } from "../components/ModalHead";
import useConfirmationDialogClasses from "./useConfirmationDialogClasses";

export interface IConfirmationDialogProps
  extends ComponentPropsWithoutRef<"div"> {
  /**
   * Text rendered in confirm button
   */
  confirmBtnText?: string;
  /**
   * Text rendered in cancel button
   */
  cancelBtnText?: string;
  /**
   * Confirm button callback function
   */
  onConfirm: () => void;
  /**
   * Cancel button callback function
   */
  onCancel: () => void;
}

export type TConfirmationDialogProps = IConfirmationDialogProps &
  IBaseDialogProps;
const ConfirmationDialog = forwardRef<HTMLDivElement, TConfirmationDialogProps>(
  (
    {
      className,
      onClose,
      // onCancel,
      // onConfirm,
      // cancelBtnText,
      // confirmBtnText,
      ...delegated
    },
    ref
  ) => {
    const { containerClasses } = useConfirmationDialogClasses({ className });
    return (
      <BaseDialog
        ref={ref}
        onClose={onClose}
        dialogClassName={containerClasses}
        {...delegated}
      >
        <ModalHead content="Modal Title" onClose={onClose} />
      </BaseDialog>
    );
  }
);

export default ConfirmationDialog;
