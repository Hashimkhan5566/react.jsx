import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './component/About';

 import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import React,{useState} from "react";
import Home from './component/Home'
import Alert from './component/Alert'

// import Rup from './component/Rup'
const name = "<h1>harry</h1>"

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setAlert]  = useState(null);


  const showAlert = (message, type)=>{
    setAlert({
       msg  : message,
       type : type
    });
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      showAlert("dark mode is alert", "success");
      document.title = "TextForm dark mode";
      setInterval(() => {
       document.title= "the text is amazing";
      },2000);
      setInterval(() => {
        document.title= "the text is amazing mode"
      },1500);


    }
    else{
      setmode('light')
      showAlert("light is enabled", "success");
       document.title = "TextUtils light mode";

    }
  }
  return (
    <>
    
      {<Navbar title="text" link="link us" mode={mode} toggleMode={toggleMode} name="hashimkhan" age={23} city="addreessed"/>}
       {/* <TextForm/> */}
      {/* <Alert alert= {alert} /> */}
      {/* {<About/>} */}
      {/* // {<Home/>} */}
      {<Routes>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Alert" element={<Alert/>}></Route>
        <Route path="/Navbar" element={<Navbar/>}></Route>
        <Route path="/" element={<TextForm/>}></Route>
      </Routes>}
   </>
  )
}

export default App
