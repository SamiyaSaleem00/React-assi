import React from "react";

function Navbar() {
  return (
 <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
  <div className="container-xl">
    <a className="navbar-brand fw-bold fs-2" href="#">SoftLand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 fw-bold">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Dropdown 1</a></li>
            <li><a className="dropdown-item" href="#">Dropdown 2</a></li>
            <li><a className="dropdown-item" href="#">Dropdown 3</a></li>
            <li><a className="dropdown-item" href="#">Dropdown 4</a></li>
            <li><a className="dropdown-item" href="#">Dropdown 5</a></li>
           
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  );
}

export default Navbar;


