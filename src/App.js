// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Header from "./components/Header";
import Landing from "./pages/Landing";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]}>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
