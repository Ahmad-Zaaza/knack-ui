// styled.d.ts
import "styled-components";
import { Theme } from "./src/theme/defaultTheme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
