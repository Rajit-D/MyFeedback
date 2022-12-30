import React from 'react'

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary mx-3">Sign Up</button>
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar