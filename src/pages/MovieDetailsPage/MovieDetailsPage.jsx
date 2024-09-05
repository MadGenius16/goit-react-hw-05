import { useEffect, useState, useRef } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import css from "./MovieDetailsPage.module.css"
import { getFilmsById } from "../../api.js"
import Loader from "../../components/Loader/Loader.jsx"
import { IoIosArrowRoundBack } from "react-icons/io";



const MovieDetailsPage = () => {
const [loader, setLoader] = useState(false);
const[film, setFilm] = useState({})
const{filmId} = useParams()

const location = useLocation()
const goBack = useRef(location.state?.from ?? "/")


// useEffect(() => {
//   async function fetchArticles(){
//          const fetch = await getFilmsById(filmId)
//       setFilm(fetch) 
//   }
//   fetchArticles()
// }, [filmId])

useEffect(()=>{
  async function fetchArticles() {
    try{
      setLoader(true)
      const fetch = await getFilmsById(filmId)
      setFilm(fetch) 
      }
    catch(error){
      console.log(error.message)
    }
    finally{
      setLoader(false)
    }
  }
  fetchArticles()
},[filmId])


const { title, overview, poster_path, genres, vote_average} = film

 const filmImage = "https://image.tmdb.org/t/p/w500"
const defaultImage = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
  return (
    <div className={css.container}>
      <Link className={css.goBack} to={goBack.current}><IoIosArrowRoundBack />Go Back</Link>

      <div className={css.wrapper}>
        <div className={css.movieInfo}>
          <img className={css.img} src={poster_path !== null ? `${filmImage}${poster_path}` : defaultImage}/>
      </div>

        <div className={css.movieDetails}>
          <h2 className={css.title}>{title}</h2>
          {vote_average !== null && <h3>User score:<p className={css.textInfo}>{film.vote_average *10}%</p></h3>}
          {overview !== "" && <h3>Overview: <p className={css.textInfo}>{overview}</p></h3>}
          {genres && genres.length !== 0 && <ul><b>Genres</b> {genres.map(({ id, name }) => <li className={css.genresListItem} key={id}>{name}</li>)}</ul>}
        </div>
      </div>
      
      

        <div className={css.linkWrap}>
          <h3 className={css.linkText}>Additional information</h3>
          <Link className={css.castLink} to={"reviews"}>Reviews</Link>
          <Link className={css.reviewsLink} to={"cast"}>Cast</Link>
        </div>
        <Outlet/>
        {loader && <Loader/>}
    </div>
  )
}

export default MovieDetailsPage