import React, {
  cloneElement,
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useMemo,
  isValidElement
} from "react";

import styled, { CSSProperties } from "styled-components";

import {
  Wrapper as AvatarWrapper,
  IAvatarProps,
  avatarSizes,
  avatarShapes
} from "../Avatar/Avatar";

export const AvatarGroupContext = createContext<
  Partial<{ size: IAvatarProps["size"]; shape: IAvatarProps["shape"] }>
>({});

interface IAvatarGroupProps extends ComponentPropsWithoutRef<"div"> {
  max?: number | null;
  onRemainingClick?: () => void;
  size?: IAvatarProps["size"];
  shape?: IAvatarProps["shape"];
}
/**
 * `AvatarGroup` renders its children as a stack. Use the `max` prop to limit the number of avatars.
 */
const AvatarGroup = forwardRef<HTMLDivElement, IAvatarGroupProps>(
  ({ children, max = 0, onRemainingClick, size, shape, ...delegated }, ref) => {
    const numberOfChildren = React.Children.count(children);

    const contextValue = useMemo(() => ({ size, shape }), [size, shape]);

    return (
      <AvatarGroupContext.Provider value={contextValue}>
        <Wrapper ref={ref} {...delegated}>
          {max && max > 0 && numberOfChildren > max ? (
            <RemainingCountAvatar
              role="button"
              style={
                {
                  ...avatarSizes[size || "medium"],
                  ...avatarShapes[shape || "rounded"]
                } as CSSProperties
              }
              onClick={onRemainingClick}
            >
              +{numberOfChildren - max}
            </RemainingCountAvatar>
          ) : null}
          {React.Children.map(children, (child, i) => {
            if (isValidElement(child)) {
              return cloneElement(child, { key: i });
            }
          })?.slice(0, max && max > 0 ? max : numberOfChildren)}
        </Wrapper>
      </AvatarGroupContext.Provider>
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
    /* background-color: ${(p) => p.theme.knackTheme.colors.primary}; */
    /* color: ${(p) => p.theme.knackTheme.colors.onPrimary}; */
  }
`;

const RemainingCountAvatar = styled.div`
  position: relative;
  isolation: isolate;
  display: inline-flex;
  overflow: hidden;
  border-radius: var(--br);
  height: var(--spacing);
  width: var(--spacing);
  font-size: var(--fs);
  user-select: none;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.knackTheme.colors.primary};
  color: ${(p) => p.theme.knackTheme.colors.onPrimary};
`;
