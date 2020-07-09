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
          <p><Link className="footer__about__input" to="/about">Recipes</Link></p>
          <p><Link className="footer__about__input" to="/about">Events</Link></p>
          <p><Link className="footer__about__input" to="/about">About page</Link></p>
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
          <a className="footer__fb" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon  icon={faFacebook} /></a>
          <a className="footer__insta" href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon  icon={faInstagram} /></a>
        </div>

        <div className="footer__address">
          <h4>Eat Spain</h4>
          <p>IČ: 123456789</p>
          <p>Palouček 11</p>
          <p>140 00 Prague 4</p>
          <p>Czech Republic</p>
        </div>
      </div>

      <p>© Eat Spain 2020</p>
    </div>
  );
};

export default Footer;
