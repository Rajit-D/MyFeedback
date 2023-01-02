import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Navbar(props) {

    const navigate = useNavigate();

    const logout =()=>{
        localStorage.removeItem("isLogged");
        localStorage.removeItem("username");
        navigate("/login");
        props.logged(true);
    }


  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("isLogged") ? (
            <>
              <Link to="/signup">
                <button type="button" className="btn btn-primary mx-3">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </Link>
            </>
          ) : (<>
            <div className="text-light mx-3">Welcome {localStorage.getItem("username")}</div>
            <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
