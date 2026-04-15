import { NavLink } from "react-router-dom";
import "./Navigation.scss";

import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

function Navigation() {
  return (
    <nav className="flexCenterCenter ">
      <div className="contPortfolio flexCenterCenter ">
        <h3 className="blinking-logo">Aleksandr Slabov</h3>
      </div>
      <ul className="ul_Burger flexSpaceAlineCentr navIcon ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flexAliCenter  navLink ${isActive ? "active" : ""}`
            }
          >
            <p>Главная</p>
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flexAliCenter  navLink ${isActive ? "active" : ""}`
            }
          >
            <p>Биография</p>
            <FaUser />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flexAliCenter  navLink ${isActive ? "active" : ""}`
            }
          >
            <p>Проекты</p>
            <FaFolderOpen />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flexAliCenter  navLink ${isActive ? "active" : ""}`
            }
          >
            <p>Контакты</p>
            <FaEnvelope />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
