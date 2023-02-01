import { transparentize } from "polished";
import { useMemo, ComponentPropsWithoutRef, forwardRef } from "react";
import styled from "styled-components";
import { SemanticThemes } from "../../theme/theme.types";
import useKnackTheme from "../../utils/useTheme";
import NoticeActions from "./Notice.Actions";
import NoticeCloseIcon from "./Notice.CloseIcon";
import NoticeContent from "./Notice.Content";
import NoticeLabel from "./Notice.Label";
import NoticeTitle from "./Notice.Title";

export interface INoticeProps extends ComponentPropsWithoutRef<"div"> {
  theme?: SemanticThemes;
  variant?: "borderless" | "default";
  visible?: boolean;
}

export interface ParentComposition {
  Content: typeof NoticeContent;
  Title: typeof NoticeTitle;
  Label: typeof NoticeLabel;
  CloseIcon: typeof NoticeCloseIcon;
  Actions: typeof NoticeActions;
}

const Notice = forwardRef<HTMLDivElement, INoticeProps>(
  ({ theme = "info", visible, variant = "default", ...delegated }, ref) => {
    const mainTheme = useKnackTheme();

    const noticeTheme = useMemo(
      () => ({
        warning: {
          theme: mainTheme.colors.themes.warning.color
        },
        info: {
          theme: mainTheme.colors.themes.info.color
        },
        danger: {
          theme: mainTheme.colors.themes.danger.color
        },
        success: {
          theme: mainTheme.colors.themes.success.color
        }
      }),
      [mainTheme]
    );
    return (
      <Wrapper
        role="status"
        aria-live="polite"
        hidden={!visible}
        ref={ref}
        borderless={variant === "borderless"}
        palette={noticeTheme[theme]}
        {...delegated}
      />
    );
  }
) as React.ForwardRefExoticComponent<
  INoticeProps & React.RefAttributes<HTMLDivElement>
> &
  ParentComposition;

Notice.Content = NoticeContent;
Notice.Title = NoticeTitle;
Notice.Label = NoticeLabel;
Notice.CloseIcon = NoticeCloseIcon;
Notice.Actions = NoticeActions;

export default Notice;

const Wrapper = styled.div<{
  palette: Record<string, string>;
  borderless: boolean;
}>`
  --icons-color: ${(p) => p.palette.theme};
  background-color: ${(p) => transparentize(0.8, p.palette.theme)};
  padding: 16px;
  display: ${(p) => (p.hidden ? "none" : "flex")};
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) =>
    p.borderless ? "transparent" : transparentize(0.7, p.palette.theme)};
`;
