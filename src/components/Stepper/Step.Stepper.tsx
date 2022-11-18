import {
  useCallback,
  useMemo,
  forwardRef,
  ComponentPropsWithoutRef,
  CSSProperties
} from "react";
import styled, { IntrinsicElementsKeys } from "styled-components";
import { Typography } from "..";
import { useStepperContext } from "./Stepper";
import DefaultStepperIcon from "./DefaultStepperIcon";

export interface IStepProps extends ComponentPropsWithoutRef<"div"> {
  index?: number;
  completed?: boolean;
  disabled?: boolean;
  isLast?: boolean;
  /**
   * Dimentions for step icon
   *
   * @default 40
   */
  iconSize?: number;
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
      iconSize = 40,
      style,
      completed = false,
      icon = DefaultStepperIcon,
      ...delegated
    },
    ref
  ) => {
    const { currentStep, onChange, clickable, vertical } = useStepperContext();
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
      <Wrapper
        data-direction={vertical ? "vertical" : "horizontal"}
        data-disabled={disabled}
        data-clickable={clickable}
        data-completed={completed}
        ref={ref}
        onClick={onChangeStep}
        style={{ "--size": `${iconSize}px`, ...style } as CSSProperties}
        {...delegated}
      >
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
  &:not(:last-of-type):not([data-direction="vertical"]) {
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
    &:is([data-completed="true"])::after {
      border-top-style: solid;
      border-color: ${(p) => p.theme.colors.green[400]};
    }
  }

  &:is([data-disabled="true"]) {
    opacity: 0.3;
  }

  &:not([data-clickable="false"]):not([data-disabled="true"]) {
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
