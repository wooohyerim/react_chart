import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
  font-family: "SpoqaHanSansNeo-Regular";
}

ul,li {
  list-style: none;
}


`;

export default GlobalStyle;
