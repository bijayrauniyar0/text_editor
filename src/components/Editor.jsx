import React, {useState} from 'react'
import './Editor.css'

export default function Editor(props) {
    const [text, setText] = useState('')
    const [color, setColor] = useState('')
    const [bgColor, setBgColor] = useState('#fff')
    const [fontSize, setFontSize] = useState(16)
    const [fontFamily, setFontFamily] = useState('Gill Sans')

    function handleFontFamily(event){
        setFontFamily(event.target.value)
    }

    function handleChange(event) {
        setText(event.target.value)
    }
    function handleFontSize(event){
        setFontSize(event.target.value)
    }
    function changeToUpperCase(){
        let newText = text.toUpperCase()
        setText(newText)
    }
    function changeToLowerCase(){
        let newText = text.toLowerCase()
        setText(newText)
    }
    function changeToBold(){
       document.querySelector('.text-editor').classList.toggle('bold')
       document.querySelector('.text-bold').classList.toggle('active')
    }
    function changeToUnderline(){
        document.querySelector('.text-editor').classList.toggle('underline')
        document.querySelector('.underline-text').classList.toggle('active')
    }
    function changeToItalic(){
        document.querySelector('.text-editor').classList.toggle('italic')
        document.querySelector('.italic-text').classList.toggle('active')
    }

    // change color
    
    function changeColor(event){
        setColor(event.target.value)
    }
    function changeBgColor(event){
        setBgColor(event.target.value)
    }

    let wordCount = 0

    if(text===''){
        wordCount = 0

    }else{
        wordCount = text.split(" ").length
    }
  return (
    <>
    <h1 style={{color: props.mode==='primary'? "black": "white"}}>Enter Text To Edit</h1>
    <div className="mb-3">
        <textarea name="" id="myBox" rows="10" value={text} onChange={handleChange} className='form-control text-editor' style={{color: props.mode==='primary'? "black": "white", background: props.mode==='primary'? "white": "#2b2b28", fontSize: fontSize+"px", resize: "none", height: "45vh", fontFamily: fontFamily}}></textarea>

    </div>
    <div className="d-flex flex-row align-items-center">
        {/* uppercase */}
        <button style={{backgroundColor: props.mode==='primary'? "#0a5fad": "#2b2b28"}} onClick={changeToUpperCase} className="btn btn-primary mx-2">A</button>
        {/* lowercase */}
        <button style={{backgroundColor: props.mode==='primary'? "#0a5fad": "#2b2b28"}} onClick={changeToLowerCase} className="btn btn-primary mx-2" >a</button>
        {/* bold */}
        <button style={{backgroundColor: props.mode==='primary'? "#0a5fad": "#2b2b28"}} onClick={changeToBold} className="btn btn-primary mx-2 text-bold" ><b>Bold</b></button>
        <button style={{backgroundColor: props.mode==='primary'? "#0a5fad": "#2b2b28"}} onClick={changeToUnderline} className="btn btn-primary mx-2 underline-text" ><u>U</u></button>
        <button style={{backgroundColor: props.mode==='primary'? "#0a5fad": "#2b2b28"}} onClick={changeToItalic} className="btn btn-primary mx-2 italic-text" ><i>Italic</i></button>
        
        {/* section which changes font size */}
        <div className="d-flex flex-row align-items-center">
            <input type="number" style={{width: "60px"}} onChange={handleFontSize} value={fontSize}/>
            <p className="my-2 mx-1" style={{fontSize: "22px", color: props.mode==='primary'? "black": "white"}}>px</p>
        </div>

        {/* to change font size */}
        <select className="mx-2" id="" onChange={handleFontFamily} >
            <option value="Gill Sans">Gill Sans</option>
            <option value="Calibri">Calibri</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Segoe UI">Segoe UI</option>
            <option value="Roboto">Roboto</option>
            <option value="sans-serif">sans-serif</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times</option>
        </select>

        <input type="color" className="mx-2" onChange={changeColor} id="color"/>
        <input type="color" className="mx-2" onChange={changeBgColor} id="color"/>

    </div>
    <h3 className='my-2' style={{color: props.mode==='primary'? "black": "white"}}>Summary:</h3>
    <p style={{color: props.mode==='primary'? "black": "white"}}><b>{wordCount}</b> Words & <b>{text.length}</b> characters</p>
    <p style={{color: props.mode==='primary'? "black": "white"}}>Estimated Time To Read: <b>{wordCount*0.0008.toFixed(5)} minutes</b></p>
    </>
  )
}
