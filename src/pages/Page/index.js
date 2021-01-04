import Navbar from "../../components/Navbar";
import Main from "../Main";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../../components/Footer";
// import Section from "../../components/Section";

const Page = (props) => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
