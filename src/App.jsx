import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";


const Loader = lazy(() => import("../src/Components/Loader/Loader.jsx"))
const HomePage = lazy(() => import("../src/Pages/HomePage/HomePage.jsx"))
const MoviesPage = lazy(() => import("../src/Pages/MoviesPage/MoviesPage.jsx"))
const MovieDetailsPage = lazy(() => import("../src/Pages/MovieDetailsPage/MovieDetailsPage.jsx"))
const NotFoundPage = lazy(() => import("../src/Pages/NotFoundPage/NotFoundPage.jsx")) 
const Navigation = lazy(() => import("../src/Components/Navigation/Navigation.jsx")) 
const MovieCast = lazy(() => import("../src/Components/MovieCast/MovieCast.jsx")) 
const MovieReviews = lazy(() => import("../src/Components/MovieReviews/MovieReviews.jsx")) 




function App() {


  return (
    <div>
      <Navigation/>
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
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
