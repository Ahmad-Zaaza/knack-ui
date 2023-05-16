import { useContext } from "react";
import { Typography } from "../Typography";
import { RadioContext, TRadioContext } from "./Radio";

const CheckboxText: React.FC = (props) => {
  const context = useContext<TRadioContext>(RadioContext);

  if (!context) {
    throw new Error(
      '<Radio.Text /> must be inside <Radio />, import {Radio} from "knack-ui" '
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
