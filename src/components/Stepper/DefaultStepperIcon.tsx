import { useMemo, CSSProperties } from "react";
import styled from "styled-components";
import useKnackTheme from "../../utils/useTheme";
import { Typography } from "../Typography";

const DefaultStepperIcon = ({
  completed,
  active,
  index
}: {
  active: boolean;
  completed: boolean;
  index: number;
}) => {
  const theme = useKnackTheme();

  const styles = useMemo(
    () => ({
      "--step-bg": completed
        ? theme.colors.green[400]
        : active
        ? theme.colors.blue[400]
        : theme.colors.gray[100],
      "--step-color":
        completed || active ? theme.colors.white : theme.colors.gray[800]
    }),
    [theme, active, completed]
  ) as CSSProperties;

  return (
    <DefaultIconWrapper style={styles}>
      {completed ? (
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9236 0.299926C13.7332 0.107972 13.474 0 13.2037 0C12.9333 0 12.6741 0.107972 12.4838 0.299926L4.92979 7.86403L1.75612 4.68021C1.48986 4.42301 1.10662 4.3274 0.75075 4.42938C0.394882 4.53136 0.120455 4.81545 0.0308421 5.17464C-0.0587709 5.53382 0.0500448 5.91353 0.316299 6.17072L4.20989 10.0643C4.40027 10.2563 4.65944 10.3642 4.92979 10.3642C5.20015 10.3642 5.45932 10.2563 5.6497 10.0643L13.9236 1.79044C14.1317 1.59848 14.25 1.32828 14.25 1.04518C14.25 0.762088 14.1317 0.491884 13.9236 0.299926Z"
            fill="white"
          />
        </svg>
      ) : (
        <Typography textAlign="center">{index + 1}</Typography>
      )}
    </DefaultIconWrapper>
  );
};

export default DefaultStepperIcon;
const DefaultIconWrapper = styled.div`
  background-color: var(--step-bg);
  color: var(--step-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
