import Page from "./pages/Page";
import "materialize-css/dist/css/materialize.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faPhone);

function App() {
  return <Page />
}

export default App;