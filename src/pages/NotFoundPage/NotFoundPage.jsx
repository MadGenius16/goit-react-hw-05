import { Link } from "react-router-dom"
import css from "./NotFoundPage.module.css"


const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p className={css.text}>
      Page is not found!
      <Link to="/" className={css.goBack}>Go Back</Link>
      </p>
    </div>
  )
}

export default NotFoundPage