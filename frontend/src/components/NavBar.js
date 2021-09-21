import React, { Component } from "react";
import { Link } from "react-router-dom";
import navbar from '../style/Navbar.module.css';

class NavBar extends Component {

  render() {

    return(
      <header className={navbar.header}>
        <nav className={`navbar navbar-dark ${navbar.color} justify-content-between`}>
          <Link
            to="/"
            id="list-home-list"
            className="navbar-brand"
            data-toggle="list"
            role="tab"
            aria-controls="home"
          >
            Introvert or Extrovert
          </Link>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </header>
    ) 
  } 
};

export default NavBar;