// Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { burgerStyles } from '../../styles';

// Component
class LinksBurger extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          right
          width="50%"
          styles={burgerStyles}
        >
          <div className="remove-outline">
            <div>
              <NavLink to="/about" onClick={() => this.closeMenu()}>
                <span className="bold-text-style glow-text-style">About</span>
              </NavLink>
            </div>

            <div>
              <a
                onClick={() => this.closeMenu()}
                href="https://github.com/LuigiLegion/star-wars-name-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold-text-style glow-text-style">Source</span>
              </a>
            </div>

            <div>
              <a
                onClick={() => this.closeMenu()}
                href="https://github.com/LuigiLegion/star-wars-name-generator/tree/master/src/data/sets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold-text-style glow-text-style">
                  Data Sets
                </span>
              </a>
            </div>

            <div>
              <a
                onClick={() => this.closeMenu()}
                href="https://taluigi.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold-text-style glow-text-style">
                  Contact Info
                </span>
              </a>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

export default LinksBurger;
