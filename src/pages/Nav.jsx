import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  );
};

export default Nav;
