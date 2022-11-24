// styled.d.ts
import "styled-components";
import { KnackTheme } from "./src/theme/theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends KnackTheme {}
}
