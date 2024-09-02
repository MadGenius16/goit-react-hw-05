import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "./Components/MovieCast/MovieCast.jsx";
import MovieReviews from "./Components/MovieReviews/MovieReviews.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";





const Loader = lazy(() => import("../src/Components/Loader/Loader.jsx"))
const HomePage = lazy(() => import("../src/Pages/HomePage/HomePage.jsx"))
const MoviesPage = lazy(() => import("../src/Pages/MoviesPage/MoviesPage.jsx"))
// const NotFoundPage = lazy(() => import("../src/Pages/NotFoundPage")) 

function App() {


  return (
    <div>
      <Navigation/>
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieCast />}/>
            <Route path="cast" element={<MovieReviews />}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
       </Suspense>
    </div>
  )
}

export default App
