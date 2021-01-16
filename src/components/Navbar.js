import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        
        <Link
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          to="/"
          rel="noopener noreferrer"
        >
          <img src={farmer} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; CryptoLand
        </Link>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <a class="nav-link" href="/createlisting">Create a Listing <span class="sr-only">(current)</span></a>
            {/* <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small> */}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
