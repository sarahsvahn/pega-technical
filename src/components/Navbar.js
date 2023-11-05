/* 
  
  Navbar.js
  Implementation of the navigation bar component

  Pega Technical Challenge
  Sarah Svahn
  November 3rd & 4th 2023

  Not implemented:
  - search 
  - scroll functionality 
  - links to the "app utilities" pages
  - mobile view

  Not working: 
  - clicking a page option does not minimize the navbar

*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faBug, faTh, faSearch, faPlus, faAngleDown, faTimes, faAngleRight, faBell, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

function Navbar() {

  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showMenu = () => {
    setIsHovered(true);
  };

  const closeMenu = () => {
    setIsHovered(false);
  };

  const toggleCreate = () => {
    setCreateOpen(!isCreateOpen);
  };

  return (
    <div className={`nav-background ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={showMenu}
      onMouseLeave={closeMenu}>
      {isHovered ? (
        <nav className="primary-panel">
          <div className="nav-header">
            <div className="logo-text">PEGA</div>
            <div className="app-name">Demo</div>
          </div>
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="search-text"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="scrollable">
            <div className={`link ${isCreateOpen ? 'open' : ''}`} onClick={toggleCreate}>
              {isCreateOpen ? <FontAwesomeIcon className="link-icon" icon={faTimes} /> : <FontAwesomeIcon className="link-icon" icon={faPlus} />}
              Create
              <div className="carrot">
                {isCreateOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} /> }
              </div>
            </div>
            {isCreateOpen && (
              <div className="create-cases">
                <Link className="create-case" to="/bug">Bug</Link>
                <Link className="create-case" to="/epic">Epic</Link>
                <Link className="create-case" to="/userstory">User Story</Link>
              </div>
            )}
            <Link className="link" to="/">
              <FontAwesomeIcon className="link-icon" icon={faHome} /> 
              Home
            </Link>
            <Link className="link" to="/dashboard">
              <FontAwesomeIcon className="link-icon" icon={faStar} /> 
              My Dashboard
            </Link>
            <Link className="link" to="/bugs">
              <FontAwesomeIcon className="link-icon" icon={faBug} /> 
              Bugs
            </Link>
            <Link className="link" to="/epics">
              <FontAwesomeIcon className="link-icon" icon={faTh} /> 
              Epics
            </Link>
          </div>
          <div className="app-utilities">
            {/* these links not implemented */}
            <div className="link">
              <FontAwesomeIcon className="link-icon" icon={faBell} /> 
              Notifications
            </div>
            <div className="link">
              <FontAwesomeIcon className="link-icon" icon={faClock} /> 
              Recents
            </div>
            <div className="link">
              <FontAwesomeIcon className="link-icon" icon={faCheckSquare} /> 
              My Applications
            </div>
          </div>
        </nav>
      ) : ( /* non hovered view */
        <nav className="primary-panel">
          <div className="nav-header">
            <div className="logo-text">PEGA</div>
          </div>
          <div className="search-bar-closed">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="scrollable">
            <FontAwesomeIcon className="link-icon" icon={faPlus} /> 
            <FontAwesomeIcon className="link-icon" icon={faHome} /> 
            <FontAwesomeIcon className="link-icon" icon={faStar} /> 
            <FontAwesomeIcon className="link-icon" icon={faBug} /> 
            <FontAwesomeIcon className="link-icon" icon={faTh} /> 
          </div>
          <div className="app-utilities">
            {/* these links not implemented */}
            <FontAwesomeIcon className="link-icon" icon={faBell} /> 
            <FontAwesomeIcon className="link-icon" icon={faClock} /> 
            <FontAwesomeIcon className="link-icon" icon={faCheckSquare} /> 
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
