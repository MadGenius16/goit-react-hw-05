import { useState, useEffect } from "react"
import css from "./HomePage.module.css"
import { useLocation } from "react-router-dom"
import {getTrendFilms} from "../../api.js"
import Loader from "../../сomponents/Loader/Loader.jsx"
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx"
import MovieList from "../../сomponents/MovieList/MovieList.jsx"

const HomePage = () => {

  const [trendFilms, setTrendFilms] = useState([])
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(false)
  const location = useLocation()
    
  useEffect(()=>{
    async function fetch() {
      try{
        setLoader(true)
        setError(false)
        const response = await getTrendFilms()
          setTrendFilms(response.results)
        }
      catch{
        setError(true)
        setTrendFilms([])
      }
      finally{
        setLoader(false)
      }
    }
    fetch()
  },[])

  return (
    <div className={css.container}>
    <h1>Trending today</h1>
    {loader && <Loader />}
    {trendFilms.length > 0 && !loader && !error && <MovieList films={trendFilms} location={{from: location}} />}
    {error && <NotFoundPage />}
</div>
  )
}

export default HomePage