import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './component/About';

 import Navbar from './component/Navbar'
import Textutils from './component/Textutils'
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
      document.title = "TextUtils dark mode";
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
    
      { <Navbar title="teext" link="link us" mode={mode} toggleMode={toggleMode} name="hashimkhan" age={23} city="addreessed"/>}
      <Textutils/>
      <Alert alert= {alert} />
      {<About/>}
      <Routes>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Alert" element={<Alert/>}></Route>
        <Route path="/Navbar" element={<Navbar/>}></Route>
        <Route path="/" element={<Textutils/>}></Route>
      </Routes>
   </>
  )
}

export default App
