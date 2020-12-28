
import React from "react";
import Header from "./components/Header/Header";
import Page from "./pages/Page";
import 'materialize-css/dist/css/materialize.min.css';

// TODO: Does the Header have to be menu for fullpage.js?
function App() {
  return (
    <div>
      <Header />
      <Page />
    </div>
  ); 
}

export default App;
