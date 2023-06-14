import React from "react";
import logo from "../../assets/img/logo-small.png";

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
                    <a href="index.html">HOME</a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="page-about-detail.html">ABOUT US </a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="page-services.html">SERVICES</a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="page-projects.html">PROJECTS</a>
                  </li>

                  <li className="menu-item menu-item-has-children">
                    <a href="page-contact.html">CONTACT</a>
                  </li>
                </ul>
              </nav>

              <div id="header-search">
                <a href="#" className="header-search-icon">
                  <span className="search-icon fa fa-search"></span>
                </a>

                <form
                  role="search"
                  method="get"
                  className="header-search-form"
                  action="#"
                >
                  <label className="screen-reader-text">Search for:</label>
                  <input
                    type="text"
                    value=""
                    name="s"
                    className="header-search-field"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className="header-search-submit"
                    title="Search"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
