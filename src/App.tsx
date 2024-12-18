import { Calculator } from "./page/Calculator";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeContextProvider } from "./contexts";

function App() {
  return (
    <ThemeContextProvider>
      <Calculator />
      <GlobalStyle />
    </ThemeContextProvider>
  );
}

export default App;
