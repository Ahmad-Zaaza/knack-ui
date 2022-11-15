import { useContext } from "react";
import { Typography } from "../Typography";
import { ToggleContext, TToggleContext } from "./Toggle";

const Text: React.FC = (props) => {
  const context = useContext<TToggleContext>(ToggleContext);

  if (!context) {
    throw new Error(
      '<Toggle.Text /> must be inside <Toggle />, import {Toggle} from "knack-ui" '
    );
  }
  return (
    <Typography
      variant={context.size === "l" ? "body2" : "body3"}
      tag="span"
      {...props}
    />
  );
};

export default Text;
Text.displayName = "ToggleText";
