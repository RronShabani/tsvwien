// import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import SocialMediaButtons from "./SocialMediaButtons"

const Header = () => {
  return (
    <div className="top-bar">
      <div className="header-content">
        <div className="left-section">
          <div className="top-menu-page">
            <Link to="/">
              <h2> Home </h2>
            </Link>
          </div>
          <div className="top-menu-page">
            <Link to="/events">
              <h2> Events </h2>
            </Link>
          </div>
        </div>
        <div className="center-section">
        </div>
        <div className="right-section">
          <SocialMediaButtons />
        </div>
      </div>
    </div>
  )
}

export default Header
