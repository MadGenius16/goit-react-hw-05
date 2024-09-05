import { useEffect, useState } from "react"
import { getCastList } from "../../api.js"
import { useParams } from "react-router-dom"
import css from "../MovieCast/MovieCast.module.css"

const MovieCast = () => {

const {filmId} = useParams()
const [filmCast, setFilmCast] = useState(null)

useEffect(() => {

  async function fetchFilmCast(){
    const fetch = await getCastList(filmId)
    setFilmCast(fetch.cast) 
  }
  fetchFilmCast()
}, [filmId])


const profileImage = "https://image.tmdb.org/t/p/w500"
const defaultImage = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"

  return (
    <>
         {filmCast !== null && filmCast.length > 0 && (
      <div className={css.castWrapper}>
        {filmCast.map(({id,name,profile_path,character})=>(
          <div key={id}>
            <img className={css.img} src={profile_path !== null ? `${profileImage}${profile_path}` : defaultImage} alt={character} />
            <p className={css.name}>{name}</p>
            <p className={css.character}>Character: {character}</p>
          </div>
        ))}
      </div>
    )}

{filmCast !== null && filmCast.length === 0 && (<div>No cast Found</div>)}
    </>
  )
}

export default MovieCast