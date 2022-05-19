import React, {
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useState
} from "react";
import StepConnector from "./StepConnector";
import useStepperClasses from "./useStepperClasses";

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

const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
  (
    {
      className,
      activeStep,
      onChange,
      clickable,
      children,
      vertical,
      ...delegated
    },
    ref
  ) => {
    const [step, setStep] = useState(() => activeStep || 0);
    const { stepperClasses } = useStepperClasses({
      className,
      vertical
    });

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
            React.cloneElement(child, {
              index,
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              isLast: index === React.Children.count(children) - 1
            })
          );
        }
      });
      return lclChildren;
    }, [children]);
    return (
      <StepperContext.Provider value={contextValue}>
        <div ref={ref} className={stepperClasses} {...delegated}>
          {renderChildren.reduce((prev, curr, index) => [
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
          ])}
        </div>
      </StepperContext.Provider>
    );
  }
);

export default Stepper;
export type { IStepperProps };
export const useStepperContext = () => {
  const stepperContext = useContext(StepperContext);
  if (stepperContext === undefined)
    throw new Error("useStepperContext must be used within a StepperProvider");
  return stepperContext;
};
