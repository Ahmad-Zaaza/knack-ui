import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useContext,
  useMemo
} from "react";
import styled, { css } from "styled-components";
import { CheckboxContext, TCheckboxContext } from "./Checkbox";

interface CheckboxControlProps extends ComponentPropsWithoutRef<"input"> {
  checked?: boolean;
  /**
   * Controls whether or not the checkbox is disabled.
   *
   */
  disabled?: boolean;

  /**
   * controls indeterminate state.
   */
  indeterminate?: boolean;
}

const Control = forwardRef<HTMLInputElement, CheckboxControlProps>(
  ({ checked, indeterminate, ...delegated }, ref) => {
    const context = useContext<TCheckboxContext>(CheckboxContext);

    if (!context) {
      throw new Error(
        '<Checkbox.Control /> must be inside <Checkbox />, import {Checkbox} from "knack-ui" '
      );
    }

    const styles = useMemo(
      () => ({
        m: {
          "--dim": "16px",
          "--bg-img":
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEwIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjI1IDFMNCA1LjI1TDEuNzUgMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)"
        },
        l: {
          "--dim": "20px",
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
        <CheckboxInput
          aria-checked={indeterminate ? "mixed" : checked}
          checked={checked}
          ref={ref}
          {...delegated}
          type="checkbox"
        />
        <Check indeterminate={indeterminate} aria-hidden />
      </Wrapper>
    );
  }
);

export default Control;

const Wrapper = styled.span`
  isolation: isolate;
  position: relative;
`;
export const CheckboxInput = styled.input`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  outline: 0;
  cursor: pointer;
`;
const Check = styled.span<{ indeterminate?: boolean }>`
  height: var(--dim);
  width: var(--dim);
  display: inline-block;
  position: relative;
  pointer-events: none;
  margin-top: 1px;

  &:before {
    border-radius: 4px;
    border: 1px solid ${(p) => p.theme.knackTheme.colors.gray[200]};
    position: absolute;
    content: " ";
    inset: 0;
    background-color: #fff;
    ${CheckboxInput}:checked + & {
      border-color: ${p => p.theme.knackTheme.colors.primary};
      background-color: ${p => p.theme.knackTheme.colors.primary};
    }
    ${CheckboxInput}:focus + & {
      border-color: ${p => p.theme.knackTheme.colors.primary};
      box-shadow: 0 0 0 3px rgba(0, 143, 248, 0.25);
    }
  }
  &:after {
    position: absolute;
    content: " ";
    inset: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    ${(p) =>
      p.indeterminate
        ? css`
            background-color: #fff;
            width: 8px;
            height: 2px;
            margin: auto;
            border-radius: 1px;
          `
        : css`
            ${CheckboxInput}:checked + & {
              background-image: var(--bg-img);
            }
          `}
  }
`;
