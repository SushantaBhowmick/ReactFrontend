import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ showSearch = false }) => {
  return (
    <>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src="images/logo.png" alt="Addressbook" />
          </div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/liststd">Student list</Link>
          </li>
          <li>
            <Link to="/listfact">Faculty list</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
        {showSearch && <Search />}
      </nav>
    </>
  );
};

export default Navbar;
