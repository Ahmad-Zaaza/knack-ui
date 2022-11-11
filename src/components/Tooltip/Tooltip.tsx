import "./Tooltip.css";

type TooltipPosition =
  | "top"
  | "block-start"
  | "bottom"
  | "block-end"
  | "left"
  | "inline-start"
  | "right"
  | "inline-end";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tool-tip": {
        children: React.ReactNode;
        "tip-position": TooltipPosition;
      };
    }
  }
}

interface ITooltipProps {
  position?: TooltipPosition;
}

const Tooltip: React.FC<ITooltipProps> = ({
  children,
  position = "block-start"
}) => <tool-tip tip-position={position}>{children}</tool-tip>;

export default Tooltip;

export type { TooltipPosition, ITooltipProps };
