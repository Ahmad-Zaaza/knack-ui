import React, {
  ComponentPropsWithoutRef,
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState
} from "react";
import styled, { IntrinsicElementsKeys } from "styled-components";
import Step from "./Step.Stepper";

interface IStepperProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  activeStep?: number;
  onChange?: (stepIndex: number) => void;
  clickable?: boolean;
  vertical?: boolean;
}

interface StepperContextProps {
  currentStep: number;
  onChange: (stepIndex: number) => void;
  clickable: boolean;
  vertical: boolean;
}

export const StepperContext =
  createContext<StepperContextProps | undefined>(undefined);

interface ParentComposition {
  Step: typeof Step;
}

type TStepper = React.FC<IStepperProps> & ParentComposition;

const Stepper: TStepper = ({
  activeStep,
  onChange,
  clickable,
  children,
  vertical,
  ...delegated
}) => {
  const [step, setStep] = useState(() => activeStep || 0);

  const onStepChange = (index: number) => {
    if (typeof activeStep !== "undefined" && onChange) {
      onChange?.(index);
      return;
    }
    if (!activeStep) {
      return setStep(index);
    }
  };

  const contextValue = useMemo(
    () => ({
      onChange: onStepChange,
      currentStep: activeStep || step,
      clickable: Boolean(clickable),
      vertical: Boolean(vertical)
    }),
    [onStepChange, step, clickable, activeStep, vertical]
  );

  const renderChildren = useMemo(() => {
    const lclChildren: React.ReactNode[] = [];
    React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        lclChildren.push(
          React.cloneElement(child as ReactElement<any>, {
            index,
            // eslint-disable-next-line react/no-array-index-key
            key: index
          })
        );
      }
    });
    return lclChildren;
  }, [children]);

  return (
    <StepperContext.Provider value={contextValue}>
      <Wrapper {...delegated}>
        {renderChildren}
        {/* {renderChildren.reduce((prev, curr, index) => [
            prev,
            // eslint-disable-next-line react/no-array-index-key
            <StepConnector
              completed={
                React.isValidElement(curr) ? !!curr.props.completed : false
              }
              index={index}
              key={`connector-${index + 1}`}
            />,
            curr
          ])} */}
      </Wrapper>
    </StepperContext.Provider>
  );
};

export default Stepper;
Stepper.Step = Step;

export type { IStepperProps, TStepper };

export const useStepperContext = () => {
  const stepperContext = useContext(StepperContext);
  if (stepperContext === undefined)
    throw new Error("useStepperContext must be used within a StepperProvider");
  return stepperContext;
};

const Wrapper = styled("stepper" as IntrinsicElementsKeys)`
  --stepper-spacing: 16px;
  display: flex;
  justify-content: space-between;
`;
