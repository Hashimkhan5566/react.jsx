import React from 'react'
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'
// import { a } from "react-router-dom";

function Navbar(props) {
  return (
<>
 <Link className="navbar-brand" to="/">Navbar</Link> 
        <Link to="/about">about us</Link>
        <Link to="/home">Home</Link>
        </>
        )}
        export default Navbar
  {/* <div>
    <nav className={`navbar bg-body-tertiary-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* ok we try without routes this a is refresh the page */}
       
//         <form className="d-flex" role="search">
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
            
//           />

//           <buthrefn className="btn btn-outline-success" type="submit">
//             Search
//           </buthrefn>
//         </form>
//         <div className={`form-check form-switch ${props.mode==="light"?"dark": "light"}`}>
//            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.hrefggleMode}/>
//               <label className="form-check-label" htmlFor="switchCheckDefault">Default switch checkbox input</label>
// </div>
//       </div>
//     </nav>
//   </div>

// </>

// //

// //


// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   a: PropTypes.string,
//   age: PropTypes.number,
//   name: PropTypes.string,
//   city: PropTypes.string
// }

// Navbar.defaultProps = {
//    title: "set here default",
//    a: "default a"
// } */}
