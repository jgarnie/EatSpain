import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../providers/CategoryProvider";

const Footer = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="footer">
      <div className="footer__flex">
        <div className="footer__about">
          <div className="footer__about__item">
            <Link className="footer__about__input" to="/about">
              Recipes
            </Link>
          </div>
          <div className="footer__about__item">
            <Link className="footer__about__input" to="/easteregg">
              Events
            </Link>
          </div>
          <div className="footer__about__item">
            <Link className="footer__about__input" to="/about">
              About page
            </Link>
          </div>
        </div>

        <div className="footer__category">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="footer__input"
              to={`/category/${category.slug}`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="footer__socials">
          <a
            className="footer__fb"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="footer__insta"
            href="https://www.instagram.com/?hl=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="footer__address">
          <div className="footer__address__title">Eat Spain</div>
          <div className="footer__address__text">IČ: 123456789</div>
          <div className="footer__address__text">Palouček 11</div>
          <div className="footer__address__text">140 00 Prague 4</div>
          <div className="footer__address__text">Czech Republic</div>
        </div>
      </div>

      <div className="footer__copyright">© Eat Spain 2020</div>
    </div>
  );
};

export default Footer;
