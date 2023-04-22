// import React from 'react'
import "./Header.css"
import SocialMediaButtons from "./SocialMediaButtons"

const Header = () => {
  return (
    <div className="top-bar">
      <div className="header-content">
        <div className="left-section">
          <div className="top-menu-page">
            <a href="/">
              <h2> Home </h2>
            </a>
          </div>
          <div className="top-menu-page">
            <a href="/events">
              <h2> Events </h2>
            </a>
          </div>
        </div>
        <div className="center-section">
          Kleine Logo
        </div>
        <div className="right-section">
          <SocialMediaButtons />
        </div>
      </div>
    </div>
  )
}

export default Header
