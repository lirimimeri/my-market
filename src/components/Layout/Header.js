import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";

import ToggleFullscreen from "../Common/ToggleFullscreen";
import HeaderRun from "./Header.run";

class Header extends Component {
  componentDidMount() {
    HeaderRun();
  }

  toggleUserblock = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("showUserBlock");
  };

  toggleOffsidebar = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("offsidebarOpen");
  };

  toggleCollapsed = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("isCollapsed");
    this.resize();
  };

  toggleAside = (e) => {
    e.preventDefault();
    this.props.actions.toggleSetting("asideToggled");
  };

  resize() {
    // all IE friendly dispatchEvent
    var evt = document.createEvent("UIEvents");
    evt.initUIEvent("resize", true, false, window, 0);
    window.dispatchEvent(evt);
    // modern dispatchEvent way
    // window.dispatchEvent(new Event('resize'));
  }

  render() {
    return (
      <header className="topnavbar-wrapper">
        <nav className="navbar topnavbar">
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">
              <div className="brand-logo">
                <img className="img-fluid" src="img/logo.png" alt="App Logo" />
              </div>
              <div className="brand-logo-collapsed">
                <img
                  className="img-fluid"
                  src="img/logo-single.png"
                  alt="App Logo"
                />
              </div>
            </a>
          </div>

          <ul className="navbar-nav mr-auto flex-row">
            <li className="nav-item">
              <a
                href=""
                className="nav-link d-none d-md-block d-lg-block d-xl-block"
                onClick={this.toggleCollapsed}
              >
                <em className="fas fa-bars"></em>
              </a>
              <a
                href=""
                className="nav-link sidebar-toggle d-md-none"
                onClick={this.toggleAside}
              >
                <em className="fas fa-bars"></em>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav flex-row">
            <li className="nav-item d-none d-md-block">
              <ToggleFullscreen className="nav-link" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.object,
  settings: PropTypes.object,
};

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
