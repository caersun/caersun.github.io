// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/main"]}>
          <Main />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
