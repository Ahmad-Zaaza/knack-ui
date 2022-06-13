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
  Omit<IBaseDialogProps, "onClose">;

/**
 * An accessible confirmation dialog or modal window.
 * Made on top of `Dialog` Component
 */
const ConfirmationDialog = forwardRef<HTMLDivElement, TConfirmationDialogProps>(
  (
    {
      className,
      onCancel,
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
        onClose={onCancel}
        dialogClassName={containerClasses}
        {...delegated}
      >
        <ModalHead content="Modal Title" onClose={onCancel} />
      </BaseDialog>
    );
  }
);

export default ConfirmationDialog;
