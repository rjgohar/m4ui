import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Routers from "./routers";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
