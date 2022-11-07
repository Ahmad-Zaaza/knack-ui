import React, {
  cloneElement,
  ComponentPropsWithoutRef,
  forwardRef,
  isValidElement
} from "react";
import styled from "styled-components";
import { Wrapper as AvatarWrapper } from "../Avatar/Avatar";
import { Avatar } from "..";

interface IAvatarGroupProps extends ComponentPropsWithoutRef<"div"> {
  max?: number;
}
/**
 * `AvatarGroup` renders its children as a stack. Use the `max` prop to limit the number of avatars.
 */
const AvatarGroup = forwardRef<HTMLDivElement, IAvatarGroupProps>(
  ({ children, max = 0, ...delegated }, ref) => {
    const numberOfChildren = React.Children.count(children);
    return (
      <Wrapper ref={ref} {...delegated}>
        {max > 0 && numberOfChildren > max && (
          <Avatar
            disableAltSlicing
            showAltOnFallback
            alt={`+${(numberOfChildren - max).toString()}`}
          />
        )}
        {React.Children.map(children, (child, i) => {
          if (isValidElement(child)) {
            return cloneElement(child, { key: i });
          }
        })?.slice(0, max > 0 ? max : numberOfChildren)}
      </Wrapper>
    );
  }
);

export default AvatarGroup;
export type { IAvatarGroupProps };

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  isolation: isolate;

  & > ${AvatarWrapper}:nth-child(n+2) {
    margin-inline-end: -8px;
  }

  & ${AvatarWrapper} {
    box-sizing: content-box;
    border: 2px solid white;
    flex-shrink: 0;
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.onPrimary};
  }
`;
