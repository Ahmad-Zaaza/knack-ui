import "./Tooltip.css";

type TooltipPositions =
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
        "tip-position": TooltipPositions;
      };
    }
  }
}

const Tooltip: React.FC = () => (
  <tool-tip tip-position="inline-end">I am a Tooltip!</tool-tip>
);

export default Tooltip;
