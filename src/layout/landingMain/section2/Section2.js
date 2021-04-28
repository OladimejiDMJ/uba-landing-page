import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Section2.scss";

const Section2 = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  useEffect(() => {
    const carouselSlide = setTimeout(() => {
      if (counter === 2) {
        return setCounter(0);
      }
      setCounter(counter + 1);
    }, 4000);

    return () => clearTimeout(carouselSlide);
  }, [counter]);

  const goLeft = (e) => {
    setCounter((counter) => {
      if (counter === 0) {
        return setCounter(2);
      }

      return counter - 1;
    });
  };

  const goRight = (e) => {
    setCounter((counter) => {
      if (counter === 2) {
        return setCounter(0);
      }

      return setCounter(counter + 1);
    });
  };

  return (
    <section className="section2">
      <div className="section2Container--child1">
        <div className="section2Container">
          <h1>UBA Internet Banking</h1>
          <div className="info">
            We’re excited to introduce you to our online banking platform and
            show you all the features we have lined up to make banking anywhere.
            Available in{" "}
            <span>
              Nigeria, Benin Republic, Burkina Faso, Congo DRC, Cote d’Ivoire,
              Gabon, Ghana, Guinea, Kenya, Liberia, Mozambique, Senegal,
              Tanzania, Uganda, Zambia.
            </span>
          </div>
        </div>
      </div>
      <div className="section2Container--child2">
        <div className="section2Container">
          <div className="info">
            <h1>Experience UBA internet banking</h1>
            <p>
              We are all about your convenience. You can bank safely and
              securely with us from any location and on any device. Navigate
              through the new and improved interface.
            </p>
          </div>
          <div className="carousel">
            <div className="carousel-div">
              <img
                className={counter === 0 ? "show" : ""}
                src="https://www.ubagroup.com/wp-content/uploads/2019/02/Jan2019_internetbanking5.jpg"
                alt=""
              />
              <img
                className={counter === 1 ? "show" : ""}
                src="https://www.ubagroup.com/wp-content/uploads/2019/03/internet-banking-group.jpg"
                alt=""
              />
              <img
                className={counter === 2 ? "show" : ""}
                src="https://www.ubagroup.com/wp-content/uploads/2020/01/uba-internet-banking-online.jpg"
                alt=""
              />
              <FaChevronLeft onClick={goLeft} className="left-icon" />
              <FaChevronRight onClick={goRight} className="right-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
