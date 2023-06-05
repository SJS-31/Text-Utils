import React from 'react'
import PropTypes from 'prop-types' //Import Proptypes

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            <div className={`form-check form-switch my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string, // restrict us to pass only string in the prop
  about: PropTypes.string.isRequired //Alwayys required, will not compile the program agr default na ho tho
}

// Deafault Props set default values (agr kuch nhi hoga tho ye likh k aaega )
Navbar.defaultProps = {
  title: "Set title", // restrict us to pass only string in the prop
  about: "About Likho"
};