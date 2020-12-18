const NavLinks = (props) => {
  return (
    <ul className={props.nav}>
      <li><a href="/main">Main</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact Me</a></li>
    </ul>
  );
};

export default NavLinks;
