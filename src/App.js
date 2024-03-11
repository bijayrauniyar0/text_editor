import './App.css';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
function App() {
  return (
   <>
    <Navbar/>
    <div className="container my-5">
      <Editor/>
    </div>
   </>
  );
}

export default App;
