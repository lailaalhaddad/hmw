import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const theme = {
    firstColor: "gold",
    secColor: "yellow",
    backgroundColor: "offwhite",
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
