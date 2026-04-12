import react from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
<>
  <div>
    <nav className={`navbar bg-body-tertiary-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* ok we try without routes this link is refresh the page */}
        {/* <a className="navbar-brand" href="/">Navbar</a> */} 
        <Link className="navbar-brand" to="/">Navbar</Link>
        <Link className="about us" to="/">about us</Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            
          />

          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className={`form-check form-switch ${props.mode==="light"?"dark": "light"}`}>
           <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.toggleMode}/>
              <label className="form-check-label" htmlFor="switchCheckDefault">Default switch checkbox input</label>
</div>
      </div>
    </nav>
  </div>

</>
)}
//

//
export default Navbar

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Link: PropTypes.string,
  age: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string
}

Navbar.defaultProps = {
   title: "set here default",
   Link: "default Link"
}
