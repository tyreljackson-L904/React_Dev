import "../Navbar/Navbar.css";
import PrimaryButton from "../props/PrimaryBtn";
import SecondaryBtn from "../props/SecondaryBtn";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-title">
          <h5 className="nav-title-pro">Pro</h5>
          <h5 className="nav-title-code">Code</h5>
        </div>
        {/* <div className="navbar-searchbar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Products/Creators"
            size="22"
          />
        </div> */}
        <div className="navbar-account">
          <SecondaryBtn className="secondary-btn" title="Login" />
          <PrimaryButton className="primary-btn" title="Sign Up" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
