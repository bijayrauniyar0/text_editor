import './App.css';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('primary')

  function toggleMode(){
    if(mode === 'primary'){
      setMode('dark')
    }else{
      setMode('primary')
    }
  }

  return (
   <>
    <Navbar mode={mode} toggleMode = {toggleMode}/>
    <div className="container my-5">
      <Editor/>
    </div>
   </>
  );
}

export default App;
