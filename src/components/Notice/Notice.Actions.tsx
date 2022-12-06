import styled from "styled-components";

const NoticeActions: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default NoticeActions;

const Wrapper = styled.div`
  margin-top: 12px;
`;
