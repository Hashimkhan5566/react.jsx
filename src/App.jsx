// import './App.css';

//  import Navbar from './component/Navbar'
// import Textutils from './component/Textutils'
// import React,{useState} from "react";
// import Alert from './component/Alert'
// // import Rup from './component/Rup'
// const name = "<h1>harry</h1>"

// function App() {
//   const [mode, setmode] = useState('dark');
//   const [alert, setAlert]  = useState(null);


//   const showAlert = (message, type)=>{
//     setAlert({
//        msg  : message,
//        type : type
//     });
//   }

//   const toggleMode = ()=>{
//     if(mode==='light'){
//       setmode('dark')
//       showAlert("dark mode is alert", "success");
//       document.title = "TextUtils dark mode";
//       setInterval(() => {
//        document.title= "the text is amazing";
//       },2000);
//       setInterval(() => {
//         document.title= "the text is amazing mode"
//       },1500);


//     }
//     else{
//       setmode('light')
//       showAlert("light is enabled", "success");
//        document.title = "TextUtils light mode";

//     }
//   }
//   return (
//     <>
    
//       { <Navbar title="teext" link="link us" mode={mode} toggleMode={toggleMode} name="hashimkhan" age={23} city="addreessed"/>}
//       <Textutils/>
//       <Alert alert= {alert} />
//       {/* <Rup/> */}
//    </>
//   )
// }

// export default App
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/textutils">Text Utils</Link> */}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;