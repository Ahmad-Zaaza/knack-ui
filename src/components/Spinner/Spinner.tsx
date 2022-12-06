import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size?: number }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 3px solid ${(p) => p.theme.knackTheme.colors.gray[300]};
  border-left: 3px solid ${(p) => p.theme.knackTheme.colors.gray[300]};
  background: transparent;
  width: ${(p) => p.size || 24}px;
  height: ${(p) => p.size || 24}px;
  border-radius: 50%;
`;

export default Spinner;
