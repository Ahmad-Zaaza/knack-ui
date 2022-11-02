import { createGlobalStyle } from "styled-components";
import { COLORS } from "../styles/constants";

const GlobalStyles = createGlobalStyle`

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}







/* CSS Variables */
:root {
--color-background:${COLORS.background};
--color-text:${COLORS.text};
--color-primary:${COLORS.primary};
--color-primary-hover:${COLORS.primaryHover};
--color-primary-accent:${COLORS.primaryAccent};
--color-primary-background:${COLORS.primaryBackground};
--color-on-primary:${COLORS.onPrimary};
--color-secondary:${COLORS.secondary};
--color-secondary-background:${COLORS.secondaryBackground};
--color-on-secondary:${COLORS.onSecondary};

--color-alert:${COLORS.alert};
--color-success:${COLORS.success};
--color-success-background:${COLORS.successBackground};
--color-danger:${COLORS.danger};
--color-gray-100:${COLORS.gray[100]};
--color-gray-200:${COLORS.gray[200]};
--color-gray-300:${COLORS.gray[300]};
--color-gray-400:${COLORS.gray[400]};
--color-gray-500:${COLORS.gray[500]};
--color-gray-600:${COLORS.gray[600]};
--color-gray-700:${COLORS.gray[700]};
--shadow-color: 0deg 0% 76%;
--color-border: var(--color-gray-200);
--color-paper-background:${COLORS.paper};
}
  

button {
  text-align: initial ;
  box-shadow:none ;
  border:none;
  font-family:inherit;
}



@media (pointer: coarse) {
    html {
      --min-tap-height: 44px;
    }
  }

`;

export default GlobalStyles;
