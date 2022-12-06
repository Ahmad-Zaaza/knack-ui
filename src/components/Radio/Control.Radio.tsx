import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useContext,
  useMemo
} from "react";
import styled from "styled-components";
import { RadioContext, TRadioContext } from "./Radio";

interface RadioControlProps extends ComponentPropsWithoutRef<"input"> {
  checked?: boolean;
  /**
   * Controls whether or not the Radio is disabled.
   *
   */
  disabled?: boolean;
}

const Control = forwardRef<HTMLInputElement, RadioControlProps>(
  ({ checked, ...delegated }, ref) => {
    const context = useContext<TRadioContext>(RadioContext);

    if (!context) {
      throw new Error(
        '<Radio.Control /> must be inside <Radio />, import {Radio} from "knack-ui" '
      );
    }

    const styles = useMemo(
      () => ({
        m: {
          "--dim": "16px",
          "--c-dim": "6px",
          "--bg-img":
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEwIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjI1IDFMNCA1LjI1TDEuNzUgMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)"
        },
        l: {
          "--dim": "20px",
          "--c-dim": "8px",
          "--bg-img":
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMSAxLjVMNC43NSA3Ljc1TDEgNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)"
        }
      }),
      []
    );
    const sizes = useMemo(() => {
      if (!context.size || !["m", "l"].includes(context.size)) {
        return styles.m;
      }
      return styles[context.size];
    }, [context.size]);
    return (
      <Wrapper style={sizes as CSSProperties}>
        <RadioInput
          aria-checked={checked}
          checked={checked}
          ref={ref}
          {...delegated}
          type="radio"
        />
        <Check aria-hidden />
      </Wrapper>
    );
  }
);

export default Control;

const Wrapper = styled.span`
  isolation: isolate;
  position: relative;
`;
export const RadioInput = styled.input`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  outline: 0;
  cursor: pointer;
`;
const Check = styled.span`
  height: var(--dim);
  width: var(--dim);
  display: inline-block;
  position: relative;
  pointer-events: none;
  margin-top: 1px;

  &:before {
    border-radius: 50%;
    border: 1px solid ${(p) => p.theme.knackTheme.colors.gray[200]};
    position: absolute;
    content: " ";
    inset: 0;
    background-color: #fff;
    ${RadioInput}:checked + & {
      border-color: #008ff8;
      background-color: #008ff8;
    }
    ${RadioInput}:focus + & {
      border-color: #008ff8;
      box-shadow: 0 0 0 3px rgba(0, 143, 248, 0.25);
    }
  }
  &:after {
    position: absolute;
    content: " ";
    inset: 0;
    margin: auto;
    border-radius: 50%;
    height: var(--c-dim);
    width: var(--c-dim);
    ${RadioInput}:checked + & {
      background-color: #fff;
    }
  }
`;
