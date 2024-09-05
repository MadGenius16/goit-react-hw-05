import Loader from "../../сomponents/Loader/Loader.jsx"
import { useState, useEffect } from "react"
import MovieList from "../../сomponents/MovieList/MovieList.jsx"
import { useLocation, useSearchParams } from "react-router-dom";
import { getFilmByKeyword } from "../../api.js";
import css from "./MoviesPage.module.css"
import SearchBar from "../../сomponents/SearchBar/SearchBar.jsx";
import toast from "react-hot-toast";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";


const MoviesPage = () => {
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const getQuery = searchParams.get('query') || "";
  const [query, setQuery] = useState(getQuery)

  const location = useLocation()
  const notifyNotFoundFilms = () => toast("There is any films for your request")

 useEffect(() => {
        if (query.trim() === "") {
            return
        } 
        async function fetch() {
            try {
                setLoader(true)
                setError(false)
                const response = await getFilmByKeyword(query)
                if (response.total_results === 0) 
                    { return notifyNotFoundFilms() }
                else {
                    setMovies(response.results)
                }
            } catch {
                setMovies([])
                setError(true)
            } finally {
                setLoader(false)
            }
        }
        fetch(query)
    }, [query])

    const handleSearch = async (query) => {
      setQuery(query)
      setMovies([])
      setSearchParams({ query: query })
  }

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch}/>
      {loader===true && <Loader/>}
      {movies.length>0 && !error && <MovieList films={movies} location={{ from: location}} />}
      {error && <NotFoundPage/>}
    </div>
  )
}


export default MoviesPage