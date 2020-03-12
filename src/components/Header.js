import React from "react";
//import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <h4>Expensify</h4>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" activeClassName="is-active">
                Dashboard
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create">
                Create
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
