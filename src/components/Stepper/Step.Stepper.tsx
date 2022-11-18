import {
  useCallback,
  useMemo,
  forwardRef,
  ComponentPropsWithoutRef
} from "react";
import styled, { IntrinsicElementsKeys } from "styled-components";
import { Typography } from "..";
import DefaultStepperIcon from "./DefaultStepperIcon";
import { useStepperContext } from "./Stepper";

export interface IStepProps extends ComponentPropsWithoutRef<"div"> {
  index?: number;
  completed?: boolean;
  disabled?: boolean;
  isLast?: boolean;
  icon?: ({
    completed,
    active
  }: {
    completed: boolean;
    active: boolean;
  }) => JSX.Element;
}

const Step = forwardRef<HTMLDivElement, IStepProps>(
  (
    {
      index = 0,
      disabled,
      children,
      completed = false,
      icon = DefaultStepperIcon
    },
    ref
  ) => {
    const {
      currentStep,
      onChange,
      clickable,
      vertical: _
    } = useStepperContext();
    const active = useMemo(() => currentStep === index, [currentStep, index]);

    const handleChangeStep = useCallback(
      (num: number) => {
        onChange(num);
      },
      [index]
    );

    const onChangeStep = useCallback(() => {
      if (!disabled && clickable && typeof index !== "undefined") {
        handleChangeStep(index);
      }
    }, [disabled, index, clickable]);

    return (
      <Wrapper data-disabled={disabled} ref={ref} onClick={onChangeStep}>
        <IconWrapper>{icon({ active, completed, index })}</IconWrapper>

        <Typography
          textAlign="center"
          onClick={onChangeStep}
          variant="subtitle2"
          tag="p"
        >
          {children}
        </Typography>
      </Wrapper>
    );
  }
);

export default Step;

const Wrapper = styled("step" as IntrinsicElementsKeys)`
  position: relative;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  --size: 40px;
  &:not(:last-of-type) {
    &:after {
      position: absolute;
      content: " ";
      border-top: 2px dashed ${(p) => p.theme.colors.gray[200]};
      inset-inline-start: calc(
        50% + var(--size) + (var(--stepper-spacing) / 2)
      );
      width: calc(100% - (var(--size) * 2) - (var(--stepper-spacing)));
      top: calc(var(--size) / 2 + 8px);
      transform: translateY(-50%);
    }
  }

  &:not([data-disabled="true"]) {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  height: var(--size);
  width: var(--size);
  overflow: hidden;
  margin-bottom: var(--stepper-spacing);
  user-select: none;
`;
