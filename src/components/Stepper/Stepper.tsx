import React, {
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import useStepperClasses from "./useStepperClasses";

interface IStepperProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  activeStep?: number;
  onChange?: (stepIndex: number) => void;
  clickable?: boolean;
}

interface StepperContextProps {
  currentStep: number;
  onChange: (stepIndex: number) => void;
  clickable: boolean;
}

export const StepperContext =
  createContext<StepperContextProps | undefined>(undefined);

const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
  (
    { className, activeStep, onChange, clickable, children, ...delegated },
    ref
  ) => {
    const [step, setStep] = useState(() => activeStep || 0);
    const { stepperClasses } = useStepperClasses({
      className
    });
    const onStepChange = useCallback((index: number) => {
      if (typeof activeStep !== "undefined" && !onChange) {
        return;
      }
      if (!activeStep) {
        return setStep(index);
      }
      if (typeof activeStep !== "undefined" && onChange) {
        setStep(index);
      }
    }, []);
    const contextValue = useMemo(
      () => ({
        onChange: onStepChange,
        currentStep: step,
        clickable: Boolean(clickable)
      }),
      [onStepChange, step, clickable]
    );
    return (
      <StepperContext.Provider value={contextValue}>
        <div ref={ref} className={stepperClasses} {...delegated}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                index,
                isLast: index === React.Children.count(children) - 1
              });
            }
            return null;
          })}
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
