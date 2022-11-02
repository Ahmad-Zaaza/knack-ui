// styled.d.ts
import "styled-components";
import { ThemeType } from "./src/theme/defaultTheme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
