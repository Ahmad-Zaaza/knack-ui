import { ComponentPropsWithRef, useMemo } from "react";
import classnames from "classnames/bind";
import { VscClose } from "react-icons/vsc";
import { Button } from "../../..";
import styles from "../../../../tailwind.css";

const clsx = classnames.bind(styles);

export interface IModalHeadProps
  extends Omit<ComponentPropsWithRef<"div">, "children"> {
  content: string | JSX.Element;
  contentClassName?: string;
  closeBtnClassName?: string;
  onClose?: () => void;
  closeIconComponent?: JSX.Element;
  borderBottom?: boolean;
}

const ModalHead = ({
  content,
  contentClassName,
  onClose,
  closeIconComponent,
  borderBottom,
  closeBtnClassName,
  className
}: IModalHeadProps) => {
  const classes = useMemo(
    () =>
      clsx(
        "modal-head",
        {
          "border-b": borderBottom
        },
        className
      ),
    [borderBottom, className]
  );
  const contentClassNames = useMemo(
    () => clsx("text-body1", "font-bold", contentClassName),
    [contentClassName]
  );
  const closeButtonClasses = useMemo(
    () => clsx("dialog-close-btn", closeBtnClassName),
    [closeBtnClassName]
  );
  return (
    <div id="modal-head" className={classes}>
      {typeof content === "string" ? (
        <h2 className={contentClassNames}>{content}</h2>
      ) : (
        content
      )}
      {typeof onClose !== "undefined" ? (
        <div className={closeButtonClasses}>
          {closeIconComponent || (
            <Button onClick={onClose} kind="ghost" variant="small" iconOnly>
              <VscClose size={20} />
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ModalHead;
