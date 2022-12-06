import { useContext } from "react";
import { Typography } from "../Typography";
import { CheckboxContext, TCheckboxContext } from "./Checkbox";

const CheckboxText: React.FC = (props) => {
  const context = useContext<TCheckboxContext>(CheckboxContext);

  if (!context) {
    throw new Error(
      '<Checkbox.Text /> must be inside <Checkbox />, import {Checkbox} from "knack-ui" '
    );
  }
  return (
    <Typography
      variant={context.size === "l" ? "body1" : "body2"}
      as="span"
      {...props}
    />
  );
};

export default CheckboxText;
