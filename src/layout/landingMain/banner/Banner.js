import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner--bg"></div>
      <div className="bannerContainer">
        <div className="bannerContainer--info">
          <h5>Digital Banking</h5>
          <h1>Internet Banking</h1>
          <p>
            Internet Banking gives you unrestricted and secure access to your
            account anytime and anywhere
          </p>
          <div className="banner--btns">
            <button>OPEN ACCOUNT</button>
            <button>FIND UBA IN YOUR COUNTRY</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
