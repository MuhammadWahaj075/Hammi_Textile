import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="site-header-wrap">
        <div id="top-bar">
          <div id="top-bar-inner" className="container">
            <div className="top-bar-inner-wrap">
              <div className="top-bar-content">
                <div className="inner">
                  <span className="address content">
                    37-C Lane 01,Defence, Phase 6, Karachi
                  </span>
                  <span className="phone content">+92-330-202-5666</span>
                  <span className="time content">Mon-Sat: 8am - 6pm</span>
                </div>
              </div>

              <div className="top-bar-socials">
                <div className="inner">
                  <span className="text">Follow us:</span>
                  <span className="icons">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-rss"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header id="site-header">
          <div id="site-header-inner" className="container">
            <div className="wrap-inner clearfix">
              <div id="site-logo" className="clearfix">
                <div id="site-log-inner">
                  <a href="index.html" rel="home" className="main-logo">
                    <h3>Hammi Architecture</h3>
                  </a>
                </div>
              </div>

              <div className="mobile-button">
                <span></span>
              </div>

              <nav id="main-nav" className="main-nav">
                <ul id="menu-primary-menu" className="menu">
                  <li className="menu-item menu-item-has-children current-menu-item">
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="/about-us">ABOUT US </Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="/services">SERVICES</Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="/projects">PROJECTS</Link>
                  </li>

                  <li className="menu-item menu-item-has-children">
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
