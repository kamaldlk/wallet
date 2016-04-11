import React from 'react';

const Navbar = (props) =>
  <nav className="navbar navbar-default navbar-inverse navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Wallet</a>
      </div>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="nav navbar-nav">
          <li><a><span className="glyphicon glyphicon-home" /> Home</a></li>
          <li>
            <a onClick={props.onReset}><span className="glyphicon glyphicon-repeat" /> Reset</a>
          </li>
          <li><a href="http://github.com/jpdriver/wallet" target="_blank"><span className="glyphicon glyphicon-sunglasses" /> View Source</a></li>
        </ul>
      </div>
    </div>
  </nav>;
Navbar.propTypes = { onReset: React.PropTypes.func.isRequired };

export default Navbar;
