import React from "react";
import "./Navbar.css";
import logo from "../../Media/logo.svg";
import todo from "../../Media/todo.svg";
import calendar from "../../Media/calendar.svg";
import reminders from "../../Media/reminders.svg";
import planning from "../../Media/planning.svg";

const Navbar = () => {
  return (
    <div className="d container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </a>
                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                  <li>
                    <a className=" dropdown-item " href="/">
                      <img className="c" src={todo} alt="list"></img>
                      Todo List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <img className="c" src={calendar} alt="calendar"></img>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a className="text-rigth dropdown-item" href="/">
                      <img className="c" src={reminders} alt="reminders"></img>
                      Reminders
                    </a>
                  </li>
                  <li>
                    <a className=" dropdown-item" href="/">
                      <img className="c" src={planning} alt="planning"></img>
                      Planning
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Our team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a className="me-2 nav-link text-black" href="/">
                Login
              </a>
              <button className="btn btn-outline-secondary" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
