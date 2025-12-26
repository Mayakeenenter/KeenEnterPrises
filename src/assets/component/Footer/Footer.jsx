import { faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
   const location = useLocation()
  const isLocation = location.pathname === "/bitrix" || location.pathname === "/ziwo"
  return (
    <footer>
      <section className="footer">
        <img src="/Keen-Logo2-B.webp" alt="logo" />
        <div className="contact">
          <p>
            Office NO 2203/2204, Boulevard Plaza Tower 2, Floor 22 -,
            <br /> Sheikh Mohammed bin Rashid Boulevard, Dubai, UAE
          </p>
          <a href="mailto:Hala@keenenter.com" className="email">
            Hala@keenenter.com
          </a>
          <a href="tel:971 50 1310408" className="email">
            +971 50 1310408
          </a>
        </div>
        <ul className="list-link ">
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
            <li className={`li-products ${isLocation ? "prodact-active" : ""}`}>
            products
            <FontAwesomeIcon icon={faAngleDown} />
            <ul className="new-list">
              <li>
                <FontAwesomeIcon icon={faCheck} />
                <NavLink to={"/bitrix"}> Bitrix24 </NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                <NavLink to={"/ziwo"}> ziwo </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/service"}>service</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>about us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>contact us</NavLink>
          </li>
        </ul>
      </section>
      <p className="p-footer">Copyright © 2025 - All rights reserved.Powered by Keen Enterprises LLC.</p>
    </footer>
  );
}

export default Footer;
