import { ThemeProvider } from "styled-components";
import { Calculator } from "./page/Calculator";
import { GlobalStyle } from "./styles/globalStyle";
import { useTheme } from "./hooks";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Calculator />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
