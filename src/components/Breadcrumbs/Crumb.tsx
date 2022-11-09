import { ComponentPropsWithoutRef, forwardRef } from "react";
import styled from "styled-components";

export interface ICrumbProps extends ComponentPropsWithoutRef<"li"> {}

const Crumb = forwardRef<HTMLLIElement, ICrumbProps>(
  ({ children, ...delegated }, ref) => (
    <Wrapper ref={ref} {...delegated}>
      {children}
    </Wrapper>
  )
);

export default Crumb;

const Wrapper = styled.li`
  display: inline;
  &:not(:first-of-type) {
    margin-inline-start: 8px;
  }
`;
