// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
// import Container from "./components/Container";

// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import ReactFullPage from "@fullpage/react-fullpage";
import Fullpage from "./pages/Fullpage";

import 'materialize-css/dist/css/materialize.min.css';

// if using router
/* <Router>
      <Header />
      <Container>
      <Switch>
        <Route exact path={["/", "/main"]}>
          <Main />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      </Container>
    </Router> */

// TODO: Does the Header have to be menu for fullpage.js?
function App() {
  return (
    <div>
      <Header />
      <Fullpage />
    </div>
  ); 
}

export default App;
