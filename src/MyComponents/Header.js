import React from 'react' //rfc -> enter using React extension of VSCode
import PropTypes from 'prop-types'


//navbar from https://getbootstrap.com/docs/5.2/components/navbar/ with some minor edits
export default function Header(props) { //use as {props.var1} {props.var2} etc its just a parameter see App.js <Header/>
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        

      </ul>

      { props.searchBar ?
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      : "No search bar"}

    </div>
  </div>
</nav>

    )
}

//propTypes for typecasting
Header.propTypes = {
  title: PropTypes.string //Throws error if we put int in App.js, but still displays
}