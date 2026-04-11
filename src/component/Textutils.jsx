import React, {useState} from 'react'

export default function Textutils() {
  const handleOnClick = ()=>{
  let newtext = text.toUpperCase();
  setText( newtext);
  }
  const HandleOnClick= ()=>{
    let new2text = text.toLowerCase();
    setText(new2text);
  }
  const handleOnClear =()=>{
    let new1text = ("");
    setText(new1text);
  }
  const handleOnChange = (event)=>{
   setText(event.target.value);
  }
     const [text,setText] = useState("enter your text");
  return (
    <>
    <div>
      <textarea className="textarea"  value ={text} onChange={handleOnChange}>this is textarea</textarea>
      <button onClick={handleOnClick}>upper case</button>  
      <button onClick={handleOnClear}> clear</button>
      <button onClick={HandleOnClick}>lower case</button>
    </div>
    <div>
      <p>{text.split(" ").length} and{text.length}</p>
    </div>
    </>
  )
}
