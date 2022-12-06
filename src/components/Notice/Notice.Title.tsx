import styled from "styled-components";
import { Typography } from "../Typography";

const NoticeTitle: React.FC = ({ children }) => (
  <Text tag="h6" variant="h6">
    {children}
  </Text>
);

export default NoticeTitle;

const Text = styled(Typography)`
  margin-bottom: 8px;
`;
