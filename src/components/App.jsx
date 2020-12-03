import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import "./css/index.css";
import Header from "./Header/Header";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Main} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
