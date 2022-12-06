import styled from "styled-components";

const NoticeLabel: React.FC = ({ children }) => (
  <Wrapper tabIndex={-1}>{children}</Wrapper>
);

export default NoticeLabel;

const Wrapper = styled.div`
  margin-inline-end: 8px;
  color: var(--icons-color);
  fill: var(--icons-color);
`;
