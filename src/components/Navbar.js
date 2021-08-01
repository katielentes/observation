import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar is-flex-direction-column is-hidden-mobile">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
        </a>

        <a
          role="button"
          class="navbar-burger"
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

      <div id="navbarBasicExample" class="navbar-menu is-flex-direction-column">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io">
            Home
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="https://bulma.io">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" href="https://bulma.io">
                About
              </a>
              <a class="navbar-item" href="https://bulma.io">
                Jobs
              </a>
              <a class="navbar-item" href="https://bulma.io">
                Contact
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item" href="https://bulma.io">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" href="https://bulma.io">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light" href="https://bulma.io">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
