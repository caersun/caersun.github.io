import "./styles.css";
import Main from "../Main";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Section from "../../components/Section";

const Page = (props) => {
  const mainStyles = {
    background: `url('./assets/images/pexels-ylanite-koppens-1445416.jpg') center center fixed`,
    height: `100vh`,
    position: `relative`,
    backgroundSize: `cover`,
  };

  return (
    <div>
      <Section style={mainStyles}>
        <Main />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
    </div>
  );
};

export default Page;
