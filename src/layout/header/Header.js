import React from "react";
import { FiLock } from "react-icons/fi";
import { AiTwotoneHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";
import "./Header.scss";

const Header = () => {
  const [navShow, setNavShow] = React.useState(false);
  window.addEventListener("scroll", (e) => {
    let header = document.querySelector(".layout-header");
    if (window.scrollY > "0") {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });

  const toggleNav = () => {
    setNavShow(!navShow);
  };

  return (
    <header className={navShow ? "layout-header show" : "layout-header"}>
      <div className="headerContainer">
        <div className="headerContainer--child1">
          <div onClick={toggleNav} className="headerContainer--toggle">
            <div className={navShow ? "toggle show" : "toggle"}></div>
            <div className={navShow ? "toggle show" : "toggle"}></div>
            <div className={navShow ? "toggle show" : "toggle"}></div>
          </div>
          <AiOutlineSearch className="icon" />
          <button>
            <FiLock /> <span>Log In</span>
          </button>
        </div>
        <nav
          className={
            navShow ? "headerContainer--nav show" : "headerContainer--nav"
          }
        >
          <div onClick={toggleNav} className="nav-bg"></div>
          <ul>
            <li>
              <a href="#">
                <FiLock className="icon" />
                <span>INTERNET BANKING</span>
              </a>
            </li>
            <li>
              <a href="#">
                <AiTwotoneHome className="icon" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                Banking <AiOutlinePlus className="plusIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                About UBA <AiOutlinePlus className="plusIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                Investors <AiOutlinePlus className="plusIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                Media <AiOutlinePlus className="plusIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                UBA Foundation <AiOutlinePlus className="plusIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                <GoGlobe className="icon" />
                <span>Countries</span>
              </a>
            </li>
            <li>
              <a href="#">Open an Account</a>
            </li>
            <li>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </li>
          </ul>
        </nav>
        <div className="headerContainer--brand">
          <a href="#">
            <img
              src="https://www.ubagroup.com/wp-content/uploads/2018/06/UBA-Logo.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
