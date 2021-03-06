import { useCallback, useMemo } from "react";
import { Button, Typography } from "..";
import { useStepperContext } from "../Stepper/Stepper";
import useStepClasses from "./useStepClasses";

export interface IStepProps {
  index?: number;
  completed?: boolean;
  disabled?: boolean;
  isLast?: boolean;
}

const Step: React.FC<IStepProps> = ({
  index,
  disabled,
  children,
  completed
}) => {
  const { currentStep, onChange, clickable, vertical } = useStepperContext();
  const active = useMemo(() => currentStep === index, [currentStep, index]);
  const { stepClasses } = useStepClasses({
    active,
    completed: Boolean(completed),
    vertical: Boolean(vertical)
  });

  const iconChildren = useMemo(
    () =>
      completed ? (
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
        index! + 1
      ),
    [completed]
  );
  const handleChangeStep = useCallback(
    (num: number) => {
      onChange(num);
    },
    [index]
  );
  return (
    <div
      // direction="column"
      // alignItems="center"
      // gap={1}
      className={stepClasses}
    >
      {/* {clickable ? (
        <Button onClick={() => onChange(index!)} disabled={disabled}>
          {iconChildren}
        </Button>
      ) : (
        <span>{iconChildren}</span>
      )} */}
      <Button
        variant="small"
        kind="defaultOutline"
        elevationAnimation={false}
        onClick={() => {
          if (clickable && typeof index !== "undefined")
            handleChangeStep(index);
        }}
        disabled={disabled}
      >
        {iconChildren}
      </Button>
      <Typography
        textAlign="center"
        onClick={() => {
          if (!disabled && clickable && typeof index !== "undefined")
            handleChangeStep(index);
        }}
        variant="subtitle2"
        as="p"
      >
        {children}
      </Typography>
    </div>
  );
};

export default Step;
