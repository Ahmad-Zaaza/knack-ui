import styled from "styled-components";

const NoticeContent: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default NoticeContent;

const Wrapper = styled.div`
  flex: 1;
  font-size: ${14 / 16}rem;
`;
