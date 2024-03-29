import React from "react";

function HomeNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info bg-gradient ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="nav-btn"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item n-li">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/team">
                  Team
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:"white"}}
                >
                  Events
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/cevent">
                      College
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/uevent">
                      University
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/sevent">
                      State
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/nevent">
                      National
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/zevent">
                      Zone Camps
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/special-events">
                  Special Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/RDParade">
                  RD Parade
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:"white"}}
                >
                  Gallery
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/photos">
                      Photos
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/videos">
                      Videos
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/media">
                      Media
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/awards">
                  Awards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/bloodDonors">
                  Blood Donation List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
