import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"white"}}>Text Editor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"white"}}>Link</a>
        </li>
      </ul>
    </div>
      <div class="form-check form-switch">
        <input class="form-check-input" style={{backgroundColor: props.mode==="primary" ? "white":"black"}} onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" for="flexSwitchCheckDefault" style={{color:"white"}}>{props.mode==="primary"?"Light Mode":"Dark Mode"}</label>
      </div>
  </div>
  
</nav>
    </>
  )
}
