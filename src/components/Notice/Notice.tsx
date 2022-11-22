
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styled from 'styled-components';

export interface INoticeProps extends ComponentPropsWithoutRef<"div"> {
  
}

const Notice = forwardRef<HTMLDivElement, INoticeProps>(
  ({ ...delegated }, ref) => (
      <Wrapper ref={ref}  {...delegated}>Notice generated successfullu</Wrapper>
    )
);

export default Notice;


const Wrapper = styled.div``

