import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-primary bg-primary`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === 'dark' ? 'dark' : 'light'}`} to="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'dark' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode === 'dark' ? 'dark' : 'light'}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch" >
                        <input className={`form-check-input bg-${props.mode === 'dark' ? 'dark' : 'light'}`} type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}