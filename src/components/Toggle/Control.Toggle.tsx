import {
  ComponentPropsWithoutRef,
  forwardRef,
  useContext,
  useMemo
} from "react";
import styled, { CSSProperties } from "styled-components";
import { ToggleContext, TToggleContext } from "./Toggle";

interface ToggleControlProps extends ComponentPropsWithoutRef<"input"> {
  checked?: boolean;
  /**
   * Controls whether or not the Toggle is disabled.
   *
   */
  disabled?: boolean;
}

const Control = forwardRef<HTMLInputElement, ToggleControlProps>(
  ({ checked, disabled, style, ...delegated }, ref) => {
    const context = useContext<TToggleContext>(ToggleContext);

    if (!context) {
      throw new Error(
        '<Radio.Control /> must be inside <Radio />, import {Radio} from "knack-ui" '
      );
    }

    const tokens = useMemo(
      () => ({
        m: {
          "--width": "40px",
          "--height": "18px",
          "--c-dim": "10px",
          "--translate": "21px"
        },
        l: {
          "--width": "40px",
          "--height": "24px",
          "--c-dim": "16px",
          "--translate": "14px"
        }
      }),
      []
    );
    const styles = useMemo(() => {
      if (!context.size || !["m", "l"].includes(context.size)) {
        return tokens.l;
      }
      return tokens[context.size];
    }, [context.size]);

    return (
      <Wrapper
        style={{ ...styles, ...style } as CSSProperties}
        data-testid="k-toggle"
        ref={ref}
      >
        <ToggleInput
          disabled={disabled}
          checked={checked}
          {...delegated}
          type="checkbox"
          role="switch"
          aria-checked={checked}
        />
        <Span />
      </Wrapper>
    );
  }
);
export default Control;
Control.displayName = "ToggleControl";

const Wrapper = styled.div`
  width: var(--width);
  height: var(--height);
  position: relative;
  border-radius: 0.75rem;
  isolation: isolate;
  overflow: hidden;
`;

export const ToggleInput = styled.input`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  outline: 0;
  &:not(:disabled) {
    cursor: pointer;
  }
`;

const Span = styled.span`
  position: absolute;
  inset: 0;
  display: inline-block;
  transition: color 200ms ease-out, background 200ms ease-out;
  background-color: ${(p) => p.theme.knackTheme.colors.gray[200]};
  z-index: -1;
  ${ToggleInput}:checked:not(:disabled) + & {
    background-color: ${(p) => p.theme.knackTheme.colors.green[400]};
  }
  ${ToggleInput}:disabled + & {
    background-color: ${(p) => p.theme.knackTheme.colors.gray[200]};
  }

  &::before {
    content: " ";
    position: absolute;
    display: inline-block;
    height: var(--c-dim);
    width: var(--c-dim);
    background-color: #fff;
    border-radius: 50%;
    transition: transform 200ms ease-out;
    top: 4px;
    inset-inline-start: 5px;

    ${ToggleInput}:focus:not(:disabled) + & {
      box-shadow: 0px 0px 2px 3px #0099e0;
    }
    ${ToggleInput}:checked + & {
      transform: translateX(var(--translate));
    }
  }
`;
