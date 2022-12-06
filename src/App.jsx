import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Routers from "./routers";
import { theme } from "./theme";
import store from "./redux/store";
import HooksWrapper from "./hooksWrapper";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HooksWrapper>
          <Routers />
        </HooksWrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
