import React, {useState} from 'react'
import './Editor.css'

export default function Editor() {
    const [text, setText] = useState('')
    const [color, setColor] = useState('')
    const [bgColor, setBgColor] = useState('#fff')
    function handleChange(event) {
        setText(event.target.value)
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
    }
    function changeColor(event){
        setColor(event.target.value)
    }
    function changeBgColor(event){
        setBgColor(event.target.value)
    }
    function changeToUnderline(){
        document.querySelector('.text-editor').classList.toggle('underline')
    }

    let wordCount = 0

    if(text==''){
        wordCount = 0

    }else{
        wordCount = text.split(" ").length
    }
  return (
    <>
    <h1>Enter Text To Edit</h1>
    <div class="mb-3">
        <textarea name="" id="myBox" cols="30" rows="10" value={text} onChange={handleChange} className='form-control text-editor' style={{color, background: bgColor}}></textarea>

    </div>
    <div className="d-flex flex-row align-items-center">
        <button onClick={changeToUpperCase} class="btn btn-primary mx-2">A</button>
        <button onClick={changeToLowerCase} class="btn btn-primary mx-2" >a</button>
        <button onClick={changeToBold} class="btn btn-primary mx-2" ><b>Bold</b></button>
        <button onClick={changeToUnderline} class="btn btn-primary mx-2" ><u>U</u></button>
        <input type="color" className="mx-2" onChange={changeColor} id="color"/>
        <input type="color" className="mx-2" onChange={changeBgColor} id="color"/>
    </div>
    <h3 className='my-2'>Summary:</h3>
    <p><b>{wordCount}</b> Words & <b>{text.length}</b> characters minutes</p>
    <p>Estimated Time To Read: <b>{wordCount*0.0008.toFixed(5)}</b></p>
    </>
  )
}
