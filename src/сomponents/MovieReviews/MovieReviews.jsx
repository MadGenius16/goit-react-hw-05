
import { useParams } from "react-router-dom"
import { getFilmReviews } from "../../api.js"
import { useEffect, useState } from "react"
import css from "../MovieReviews/MovieReviews.module.css"


const MovieReviews = () => {

const {filmId} = useParams()
const [filmReviews, setFilmReviews] = useState(null)

useEffect(() => {
  async function fetchFilmReviews(){
    const fetch = await getFilmReviews(filmId)
    setFilmReviews(fetch.results) 
  }
  fetchFilmReviews()
}, [filmId])

  return (
    <>
       {filmReviews !== null && filmReviews.length !== 0 && (
        <div className={css.list}>
          {filmReviews.map(({content,id,author}) => (
            <div className={css.review} key={id}>
              <p className={css.author}><b>Author: </b>{author}</p>
              <p className={css.content}>{content}</p>
            </div>
          ))}
        </div>
      )}

      {filmReviews !== null && filmReviews.length === 0 && (<div>No reviews Found</div>)}
    </>
  )
}

export default MovieReviews