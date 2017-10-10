import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  // Collapse,
  NavbarToggler,
  Navbar,
  Button,
  NavbarBrand,
  // NavItem,
  // NavLink
} from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  } // end constructor

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/"> argives1 </NavbarBrand>

          <Button
            onClick={this.goTo.bind(this, "home")}
            color="link"
            className=""
          >
            Home
          </Button>
          <Button
            onClick={this.goTo.bind(this, "about")}
            color="link"
            className=""
          >
            About
          </Button>
          <Button
            onClick={this.goTo.bind(this, "instructorRTC")}
            color="link"
            className=""
          >
            InstructorRTC
          </Button>
          <Button
            onClick={this.goTo.bind(this, "playground")}
            color="link"
            className=""
          >
            Playground
          </Button>

          {!isAuthenticated() && (
            <Button
              onClick={this.login.bind(this)}
              outline
              color="success"
              className="right"
            >
              로그인 Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button
              onClick={this.logout.bind(this)}
              outline
              color="secondary"
              size="sm"
              className="right app-nav-bt"
            >
              로그아웃 Log Out
            </Button>
          )}
        </Navbar>
      </div>
    );
  }
}

export default App;
