import './App.css';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import React, {useState} from 'react'

function App() {

const [mode, setMode] = useState('primary')

const toggleMode = () => {
  if(mode === 'primary'){
    setMode('dark')
    document.body.style.backgroundColor = 'black'
  }else{
    setMode('primary')
    document.body.style.backgroundColor = 'white'
  }
}


  return (
   <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container my-5">
      <Editor mode={mode}/>
    </div>
   </>
  );
}

export default App;
