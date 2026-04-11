// import react from 'react'
// import PropTypes from 'prop-types'

// function Navbar(props) {
//   return (
// <>
//   <div>
//     <nav className={`navbar bg-body-tertiary-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand">Navbar</a>
//         <a className="about us">about us</a>
//         <form className="d-flex" role="search">
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
            
//           />

//           <button className="btn btn-outline-success" type="submit">
//             Search
//           </button>
//         </form>
//         <div className={`form-check form-switch ${props.mode==="light"?"dark": "light"}`}>
//            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.toggleMode}/>
//               <label className="form-check-label" htmlFor="switchCheckDefault">Default switch checkbox input</label>
// </div>
//       </div>
//     </nav>
//   </div>

// </>
// )}
// //

// //
// export default Navbar

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   link: PropTypes.string,
//   age: PropTypes.number,
//   name: PropTypes.string,
//   city: PropTypes.string
// }

// Navbar.defaultProps = {
//    title: "set here default",
//    link: "default link"
// }
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;