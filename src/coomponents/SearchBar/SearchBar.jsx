import { Field, Formik, Form } from "formik"
import css from "./SearchBar.module.css"
import toast from "react-hot-toast";

  const SearchBar = ({onSubmit}) => {

  const notifyEmpty = () => toast("Please, enter something on the searching field")
  const initialValues = { query: "" }

  return (
      <div>
          <Formik initialValues={initialValues} onSubmit={(values, actions) => {
              if (values.query.trim() === "") {
                  notifyEmpty()
              } else {
                  onSubmit(values.query)
              }
              actions.resetForm()
          }}>
              <Form className={css.form}>
                  <Field
                      className={css.input}
                      type="text"
                      name="query"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search movies"
                    />
                    <button className={css.button} type="submit">Search</button>
              </Form>
          </Formik>
      </div>
  )
}

export default SearchBar