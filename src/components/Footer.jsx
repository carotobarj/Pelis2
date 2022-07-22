import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <footer>
        <nav className="container-fluid">
                <ul className="nav justify-content-start">
                    <li> <a href="https://www.instagram.com" rel="noopener noreferrer" className="nav-link active">Instagram</a></li>
                    <li><a href="https://www.facebook.com" rel="noopener noreferrer" className="nav-link active">Facebook</a></li>
                    
                </ul>
                
            </nav>
            <span>Copyright all rights reserved 2022</span>
    </footer>
  )
}

export default Footer