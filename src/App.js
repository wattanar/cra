import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { MainProvider } from "./contexts/MainContext";

// routers
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Counter from "./routes/Counter";

function App() {
  return (
    <React.Fragment>
      <MainProvider>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/counter">
                <Counter />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </MainProvider>
    </React.Fragment>
  );
}

export default App;
