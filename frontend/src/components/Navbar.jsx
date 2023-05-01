import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "../store/actions/authAction";

export default function Navbar() {
  const { login } = useSelector((state) => state.auth);
  console.log(login);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogOut());
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Blog Application
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/dashboard">
                Dashboard
              </Link>

              {login && login.name ? (
                <>
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                    >
                      {login && login.name}
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link to="/account">Add Blog</Link>
                      </li>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <button
                          onClick={(e) => handleLogOut()}
                          className="btn btn-danger"
                        >
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link class="nav-link" to="/login">
                    Login{" "}
                  </Link>
                  <Link className="nav-link" to="/register">
                    {" "}
                    Register{" "}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
