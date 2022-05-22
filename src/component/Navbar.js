import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">HOME</Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/add" class="nav-link active">Addbook</Link>
         
        </li>
        
      </ul>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Navbar