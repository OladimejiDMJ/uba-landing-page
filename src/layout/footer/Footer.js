import React from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="layout-footer">
      <div className="helpSection">
        <AiTwotoneMessage className="icon" />
        <span>Get Live Help</span>
      </div>
      <div className="liveChat">
        <div className="liveChatContainer">
          <div className="child1"></div>
          <div className="child2"></div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerContainer--child1">
          <div className="footerLinks--div">
            <h5>UBA Group</h5>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">UBA Foundation</a>
              </li>
              <li>
                <a href="">Awards</a>
              </li>
              <li>
                <a href="">Business Focus</a>
              </li>
              <li>
                <a href="">Press Releases</a>
              </li>
              <li>
                <a href="">Sustainable Banking</a>
              </li>
            </ul>
          </div>
          <div className="footerLinks--div">
            <h5>Investors</h5>
            <ul>
              <li>
                <a href="">Global Investor & Financial Services</a>
              </li>
              <li>
                <a href="">Analyst Reports</a>
              </li>
              <li>
                <a href="">Credit Ratings</a>
              </li>
              <li>
                <a href="">GDR Programme</a>
              </li>
              <li>
                <a href="">Quick Facts</a>
              </li>
            </ul>
          </div>
          <div className="footerLinks--div">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Photo & Video Library</a>
              </li>
              <li>
                <a href="">Initiatives</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">The Brand</a>
              </li>
              <li>
                <a href="">Lion King Magazine</a>
              </li>
              <li>
                <a href="">Self Service</a>
              </li>
            </ul>
          </div>
          <div className="footerLinks--div">
            <h5>Help & Support</h5>
            <ul>
              <li>
                <a href="">Video Banking Help</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Fraud Awareness</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <select name="" id="">
                  <option value="">Select Language</option>
                  <option value="">Chinese</option>
                  <option value="">English</option>
                  <option value="">French</option>
                  <option value="">Portuguese</option>
                  <option value="">Spanish</option>
                  <option value="">Swahili</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="footerLinks--div">
            <h5>Connect</h5>
            <div className="newsletter">
              <p>Sign Up for Our Newsletter</p>
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button type="submit">JOIN US</button>
              </form>
              <span>
                **I agree that UBA Group and its affiliates may use my contact
                details to send me communications
              </span>
              <div className="btn-div">
                <button>
                  <div className="btnIcon-div">
                    <FaApple className="icon" />
                  </div>
                  <div className="btn-content">
                    <span>DOWNLOAD ON THE</span>
                    <span>App Store</span>
                  </div>
                </button>
                <button>
                  <div className="btnIcon-div">
                    <FaGooglePlay className="icon" />
                  </div>
                  <div className="btn-content">
                    <span>GET IT ON</span>
                    <span>Google Play</span>
                  </div>
                </button>
              </div>
              <div className="footer-socials">
                <div className="icon-div">
                  <FaFacebookF className="icon" />
                </div>
                <div className="icon-div">
                  <FaTwitter className="icon" />
                </div>
                <div className="icon-div">
                  <FaInstagram className="icon" />
                </div>
                <div className="icon-div">
                  <FaYoutube className="icon" />
                </div>
                <div className="icon-div">
                  <FaLinkedinIn className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerContainer--child2">
          <div className="copyright">
            <p>&copy; 2021 UBA Group. All Rights Reserved</p>
          </div>
          <ul>
            <li>
              <a href="">Site Map</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://www.ubagroup.com/wp-content/uploads/2018/08/uba-grey-logo-no-caption.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
