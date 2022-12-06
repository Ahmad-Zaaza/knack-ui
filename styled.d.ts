// styled.d.ts
import "styled-components";
import { IntegratedTheme } from "./src/theme/theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends IntegratedTheme {}
}
