import React, {useState} from 'react'
import './Editor.css'

export default function Editor() {
    const [text, setText] = useState('')
    const [color, setColor] = useState('')
    const [bgColor, setBgColor] = useState('#fff')
    const [fontSize, setFontSize] = useState('18')
    function handleChange(event) {
        setText(event.target.value)
    }
    function handleFontChange(event) {
        let fontSize = event.target.value
        console.log(fontSize)
        setFontSize(fontSize)
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
    <h1>Enter Text To Edit</h1>
    <div className="mb-3">
        <textarea name="" id="myBox" rows="10" value={text} onChange={handleChange} className='form-control text-editor' style={{color, background: bgColor, fontSize: fontSize +"px", resize: "none", height:"350px"}}></textarea>

    </div>
    <div className="d-flex flex-row align-items-center">
        <button onClick={changeToUpperCase} className="btn btn-primary mx-2">A</button>
        <button onClick={changeToLowerCase} className="btn btn-primary mx-2" >a</button>
        <button onClick={changeToBold} className="btn btn-primary mx-2 text-bold" ><b>Bold</b></button>
        <button onClick={changeToUnderline} className="btn btn-primary mx-2 underline-text" ><u>U</u></button>
        <button onClick={changeToItalic} className="btn btn-primary mx-2 italic-text" ><i>Italic</i></button>
        <div className="d-flex flex-row align-items-center">
            <input type="number" value={fontSize} onChange={handleFontChange} className='font-size-input' />
            <p className='mx-1 my-2'>px</p>
        </div>
        <input type="color" className="mx-2" onChange={changeColor} id="color"/>
        <input type="color" className="mx-2" onChange={changeBgColor} id="color"/>
    </div>
    <h3 className='my-2'>Summary:</h3>
    <p><b>{wordCount}</b> Words & <b>{text.length}</b> characters</p>
    <p>Estimated Time To Read: <b>{wordCount*0.0008.toFixed(5)} minutes</b></p>
    </>
  )
}
