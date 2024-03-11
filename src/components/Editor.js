import React, {useState} from 'react'

export default function Editor() {
    const [text, setText] = useState('')
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
  return (
    <>
    <h1>Enter Text To Edit</h1>
    <div class="mb-3">
        <textarea name="" id="myBox" cols="30" rows="10" value={text} onChange={handleChange} className='form-control'></textarea>

    </div>
    <button onClick={changeToUpperCase} class="btn btn-primary mx-2">A</button>
    <button onClick={changeToLowerCase} class="btn btn-primary" >a</button>
    <h3 className='my-2'>Summary:</h3>
    <p><b>{text.split(" ").length}</b> Words & <b>{text.length}</b> characters</p>
    </>
  )
}
