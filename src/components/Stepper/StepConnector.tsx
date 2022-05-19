import React, { useMemo } from "react";
import { useStepperContext } from "./Stepper";
import useStepConnectorClasses from "./useStepConnectorClasses";

interface IStepConnectorProps {
  index?: number;
  completed?: boolean;
}

const StepConnector: React.FC<IStepConnectorProps> = ({ completed, index }) => {
  const { currentStep, vertical } = useStepperContext();
  const active = useMemo(() => currentStep === index, [currentStep, index]);

  const { connectorClasses } = useStepConnectorClasses({
    active,
    completed: Boolean(completed),
    vertical
  });

  return (
    <div className={connectorClasses}>
      <span />
    </div>
  );
};

export default StepConnector;
