import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import { store } from "./store/root";


export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Detail}/>
        </Switch>
      </Router>
    </Provider>
  );
}
