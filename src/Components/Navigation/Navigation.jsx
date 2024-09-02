import clsx from "clsx";
import css from "../Navigation/Navigation.module.css"
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
      <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={(params) => { clsx(css.navLink, params.isActive && css.active)}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={(params) => { clsx(css.navLink, params.isActive && css.active)}}>Movies</NavLink>
            </li>
          </ul>
      </nav>
  )
}

export default Navigation