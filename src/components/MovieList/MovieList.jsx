import { Link } from "react-router-dom"
import css from "./MovieList.module.css"

const MovieList = ({films, location} ) => {
  return (
    <div>
      <ul className={css.list}>{films.map(({id, title}) => <li className={css.listItem} key={id}>
      <Link to={`/movies/${id}`} state={location}>{title}</Link>
      </li>
    )}</ul>
    </div>
  )
}

export default MovieList