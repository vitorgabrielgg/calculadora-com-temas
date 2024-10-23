import { ThemeProvider } from "styled-components";
import { Calculator } from "./page/Calculator";
import { GlobalStyle } from "./styles/globalStyle";
import { theme1 } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Calculator />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
