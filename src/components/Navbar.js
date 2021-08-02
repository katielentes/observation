import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar has-background-warning-light is-align-items-center">
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-1">🔍🌱</h1>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="https://bulma.io"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu is-flex-direction-column">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io">
            Home
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="https://bulma.io">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="https://bulma.io">
                About
              </a>
              <a className="navbar-item" href="https://bulma.io">
                Jobs
              </a>
              <a className="navbar-item" href="https://bulma.io">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="https://bulma.io">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
