import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { CategoriesApi } from "../../api/CategoriesApi.js";
import AboutPage from "../../pages/AboutPage/AboutPage";




const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CategoriesApi.getAllCategories(setCategories, setIsLoading);
  }, []);

  return (

  <div className="footer">
    <div className="footer__flex">

    <div className="footer__about">
      <p>About page</p>
      <p>Recipes</p>
      <p>Events</p>
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
    <FontAwesomeIcon className="footer__fb" icon={faFacebook} />
    <FontAwesomeIcon className="footer__insta" icon={faInstagram} />
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
