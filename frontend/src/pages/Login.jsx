import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/authAction";
export default function Login() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "john@gmail.com",
      password: "123",
    },
    validationSchema: yup.object({
      email: yup.string().required("Please Enter Email"),

      password: yup.string().required("Please Enter Valid Email"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUser(values))
    },
  });
  const { login } = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (login && login.name) {
      navigate("/account")
    }
  }, [login])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header text-center alert bg-info">
                <strong>Login</strong>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="card-body">
                  <div>
                    <label for="email" className="form-label">
                      <strong>First Email</strong>
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.email && formik.touched.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      <strong>{formik.errors.email}</strong>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label for="password" className="form-label">
                      <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.password && formik.touched.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      <strong>{formik.errors.password}</strong>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    <strong>Login</strong>
                  </button>
                  <p className="text-center mt-3">
                    <strong>Dont Have Account?</strong>{" "}
                    <Link to="/register">Create Account</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
