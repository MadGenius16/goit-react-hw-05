import { NavLink, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import css from "./App.module.css"
import clsx from "clsx";





const Loader = lazy(() => import("../src/Components/Loader/Loader.jsx"))
const HomePage = lazy(() => import("../src/Pages/HomePage/HomePage.jsx"))
const MoviesPage = lazy(() => import("../src/Pages/MoviesPage/MoviesPage.jsx"))

function App() {


  return (
    <div>
      <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={(params) => { return clsx(css.navLink, params.isActive && css.active)}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={(params) => { return clsx(css.navLink, params.isActive && css.active)}}>Movies</NavLink>
            </li>
          </ul>
        </nav>
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
        </Routes>
       </Suspense>
    </div>
  )
}

export default App
