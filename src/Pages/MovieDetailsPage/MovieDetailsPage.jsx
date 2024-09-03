import { useEffect, useState, useRef } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import css from "../MovieDetailsPage/MovieDetailsPage.module.css"
import { getFilmsById } from "../../api.js"




const MovieDetailsPage = () => {

const[film, setFilm] = useState({})
const{filmId} = useParams

const location = useLocation()
const goBack = useRef(location.state?.from ?? "/")

useEffect(() => {
  async function fetchArticles() {
      const fetch = await getFilmsById(filmId)
      setFilm(fetch)
  }
  fetchArticles()
}, [filmId])
const { title, overview, poster_path, genres, vote_average} = film

 const filmImage = "https://image.tmdb.org/t/p/w500"
const defaultImage = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
  return (
    <div>
      <Link className={css.goBack} to={goBack.current}>Go Back</Link>
      <div className={css.movieInfo}>
        <img className={css.img} src={poster_path !== null ? `${filmImage}${poster_path}` : defaultImage}/>
      </div>

      <div className={css.movieWrap}>
        <div className={css.movieDetails}>
          <h2 className={css.title}>{title}</h2>
          {vote_average !== null && <h3>User score:<p className={css.textInfo}>{vote_average *10}%</p></h3>}
          {overview !== "" && <h3>Overview: <p className={css.textInfo}>{overview}</p></h3>}
          {genres && genres.length !== 0 && <ul>Genres: {genres.map(({ id, name }) => <li className={css.genresListItem} key={id}>{name}</li>)}</ul>}
        </div>
      </div>
        <div className={css.linkWrap}>
          <NavLink className={css.castLink} to="cast">Cast</NavLink>
          <NavLink className={css.reviewsLink} to="reviews">Reviews</NavLink>
        </div>
        <Outlet/>
    </div>

  )
}

export default MovieDetailsPage