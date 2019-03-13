import { Formik, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

const LoginForm = ({ login, schema, header, loginError }) => (
  <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    validationSchema={schema}
    onSubmit={(values, { resetForm }) => {
      const { username, password } = values
      if (login) login({ username, password })
      resetForm(values)
    }}
    render={({ handleSubmit, isSubmitting }) => (
      <form noValidate onSubmit={handleSubmit}>
        <h1>{header}</h1>
        <Field type="text" name="username" placeholder="Username" required />
        <ErrorMessage
          name="username"
          className="login__error"
          component="div"
        />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ErrorMessage
          name="password"
          className="login__error"
          component="div"
        />
        {loginError && <div className="login__error">{loginError}</div>}
        <button className="button" disabled={isSubmitting} type="submit">
          Login
        </button>
      </form>
    )}
  />
)

LoginForm.propTypes = {
  // Function to call on successful submit
  login: PropTypes.func,
  // yup schema for form validation
  schema: PropTypes.object,
  // Title of the form, appears in h1
  header: PropTypes.string,
  // General form error
  loginError: PropTypes.string
}

export default LoginForm