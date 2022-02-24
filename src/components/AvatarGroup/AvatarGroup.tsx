import React, {
  cloneElement,
  ComponentPropsWithoutRef,
  forwardRef,
  isValidElement
} from "react";
import { Avatar } from "..";
import useAvatarGroupClasses from "./useAvatarGroupClasses";

export interface IAvatargroupProps extends ComponentPropsWithoutRef<"div"> {
  max?: number;
}
/**
 * `AvatarGroup` renders its children as a stack. Use the `max` prop to limit the number of avatars.
 */
const AvatarGroup = forwardRef<HTMLDivElement, IAvatargroupProps>(
  ({ className, children, max = 0, ...delegated }, ref) => {
    const { containerClasses } = useAvatarGroupClasses({ className });
    const numberOfChildren = React.Children.count(children);
    return (
      <div ref={ref} className={containerClasses} {...delegated}>
        {max > 0 && numberOfChildren > max && (
          <Avatar max text={`+${(numberOfChildren - max).toString()}`} />
        )}
        {React.Children.map(children, (child, i) => {
          if (isValidElement(child)) {
            return cloneElement(child, { key: i });
          }
        })?.slice(0, max > 0 ? max : numberOfChildren)}
      </div>
    );
  }
);

export default AvatarGroup;
