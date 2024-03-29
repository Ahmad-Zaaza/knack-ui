import styled from "styled-components";

interface INoticeCloseIconProps {
  onClick?: () => void;
}

const NoticeCloseIcon = ({ onClick }: INoticeCloseIconProps) => (
  <Wrapper
    tabIndex={0}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    focusable="true"
    aria-label="Close alert"
    role="button"
    onClick={onClick}
  >
    <path
      d="M3.323 3.323c-.43.43-.43 1.128 0 1.559L6.44 8l-3.118 3.118a1.102 1.102 0 1 0 1.559 1.56L8 9.558l3.118 3.118a1.102 1.102 0 0 0 1.56-1.559L9.558 8l3.118-3.118a1.102 1.102 0 0 0-1.559-1.56L8 6.442 4.882 3.323a1.102 1.102 0 0 0-1.56 0Z"
      shapeRendering="geometricPrecision"
    />
  </Wrapper>
);

export default NoticeCloseIcon;

const Wrapper = styled.svg`
  margin-inline-start: 8px;
  fill: var(--icons-color);
  cursor: pointer;
  color: ${(p) => p.theme.knackTheme.colors.gray[800]};
`;
