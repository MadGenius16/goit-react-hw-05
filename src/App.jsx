import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import css from "./App.module.css"


const MoviesPage = lazy(() => import("../src/pages/MoviesPage/MoviesPage.jsx"))
const MovieDetailsPage = lazy(() => import("../src/pages/MovieDetailsPage/MovieDetailsPage.jsx"))
const NotFoundPage = lazy(() => import("../src/pages/NotFoundPage/NotFoundPage.jsx"))
const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"))
const Navigation = lazy(() => import("../src/components/Navigation/Navigation.jsx")) 
const MovieCast = lazy(() => import("../src/components/MovieCast/MovieCast.jsx")) 
const MovieReviews = lazy(() => import("../src/components/MovieReviews/MovieReviews.jsx"))
const Loader = lazy(() => import("../src/components/Loader/Loader.jsx"))


function App() {
  

  
  return (
    <div className={css.container}>
      <Navigation/>
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:filmId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />}/>
            <Route path="cast" element={<MovieCast />}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
       </Suspense>
    </div>
  )
}

export default App
