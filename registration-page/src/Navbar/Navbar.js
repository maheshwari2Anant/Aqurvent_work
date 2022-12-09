import React from "react";
import "./Navbar.css";
import about from "../images/aboutus.jpg";
import logo from "../images/logook.png";

function Navbar() {
  return (
    <>
      {/* <img src={about}/> */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="45"
              class="d-inline-block align-text-top"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav"></ul>
          </div>
        </div>

        <div
          
          id="navbarScroll"
          class="collapse navbar-collapse"
        >
          <ul
            
            class="
            navbar-nav
            ms-auto
            my-2 my-lg-0
            navbar-nav-scroll
            nav-dropdown-link
          "
          >
            <li  class="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>{" "}
            <li class="nav-item">
              <a  href="/connect" class="nav-link">
                Recruiters
              </a>
            </li>{" "}
            {/* <li  class="nav-item">
              <a  href="/job-seeker" class="nav-link">
                Job Seekers
              </a>
            </li>{" "} */}
            <li  class="nav-item in-mobile-1">
             
            </li>{" "}
            <li  class="nav-item in-mobile-1">
             
            </li>{" "}
            <li  class="nav-item">
              <button
                
                type="button"
                class=" default-btn button-sm download-btn login-btn"
              >
                Recruiter Login
              </button>
            </li>{" "}
            <li  class="nav-item">
              <button
                
                type="button"
                class=" default-btn button-sm download-btn"
              >
               User Login
              </button>
            </li>{" "}
            <li  class="nav-item in-mobile-2">
              {/* <button
                
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#secondnavbar"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="toggling"
              >
                <span  class="navbar-toggler-icon"></span>
              </button>{" "} */}
              <div
                
                id="secondnavbar"
                class="collapse nav-coll"
              >
                
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
