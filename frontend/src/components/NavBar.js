import React, { useState,  useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Se quiser estilizar o menu
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adolescentes">Adolescentes</Link></li>
          <li><Link to="/visitantes">Visitantes</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
