import { ComponentPropsWithoutRef, useRef } from "react";
import { calculateInputHeight } from "../../utils/helpers";
import { useIsomorphicLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";

import Input, { IInputProps } from "../Input/Input";
import Textarea, { ITextareaProps } from "../Textarea/Textarea";
import Typography, {
  TypographyProps,
  TypographyTags
} from "../Typography/Typography";

export interface IEditbleTypographyProps {
  /**
   * Input type
   */
  type?: "input" | "textarea";
  /**
   * Props for the underlying Input | Textarea element
   */
  inputProps?: IInputProps | ITextareaProps;
  /**
   *  Underlying `Input` | `Textarea` element Ref
   */
  inputRef?: (ref: HTMLInputElement | HTMLTextAreaElement | null) => void;
  /**
   * Props for the underlying `form` element which wraps the input to activate
   */
  formProps?: ComponentPropsWithoutRef<"form">;
  /**
   * Props for the underlying `Typography` element
   */
  typographyProps?: TypographyProps<TypographyTags>;

  /**
   * Callback applied when pressing 'Enter' or pressing 'Esc' or Blurring out an input
   */
  onSubmit?: () => void;
  /**
   * Whether to show the editable input or not
   */
  showInput?: boolean;
  /**
   * callback to toggle the showing the input
   */
  onToggleEdit?: () => void;
}

const EditbleTypography: React.FC<IEditbleTypographyProps> = ({
  type = "input",
  inputProps,
  inputRef,
  typographyProps,
  formProps,
  showInput,
  onToggleEdit,
  onSubmit,
  children
}) => {
  const interalInputRef =
    useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const onEscPress = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Escape") {
      onToggleEdit?.();
    }
  };

  // Update input height to match the input value content
  useIsomorphicLayoutEffect(() => {
    if (interalInputRef.current) {
      calculateInputHeight(interalInputRef.current);
    }
  }, []);
  return (
    <>
      {!showInput && (
        <Typography
          onDoubleClick={(event: any) => {
            if (event.detail > 1) {
              event.preventDefault();
              onToggleEdit?.();
            }
          }}
          {...typographyProps}
        >
          {children}
        </Typography>
      )}
      {/* 🍄 Title edit Input */}
      {showInput && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
          {...formProps}
        >
          {type === "input" ? (
            <Input
              autoFocus
              ref={(e) => {
                inputRef?.(e);
                interalInputRef.current = e;
              }}
              onKeyDown={onEscPress}
              {...(inputProps as IInputProps)}
              onBlur={(e) => {
                const providedProps = inputProps as IInputProps;
                if (providedProps && providedProps.onBlur) {
                  providedProps?.onBlur(e);
                }
                onSubmit?.();
              }}
            />
          ) : (
            <Textarea
              autoFocus
              ref={(e) => {
                inputRef?.(e);
                interalInputRef.current = e;
              }}
              onKeyDown={onEscPress}
              {...(inputProps as ITextareaProps)}
              onBlur={(e) => {
                const providedProps = inputProps as ITextareaProps;
                if (providedProps && providedProps.onBlur) {
                  providedProps?.onBlur(e);
                }
                onSubmit?.();
              }}
            />
          )}
        </form>
      )}
    </>
  );
};

export default EditbleTypography;
