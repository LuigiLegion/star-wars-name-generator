import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { burgerStyles } from '../../styles';

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
              <a
                onClick={() => this.closeMenu()}
                href="https://github.com/LuigiLegion/star-wars-name-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold-text-style glow-text-style">
                  GitHub Repo
                </span>
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
                href="https://www.wikia.com/api/v1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bold-text-style glow-text-style">
                  Wikia API
                </span>
              </a>
            </div>

            <div>
              <a
                onClick={() => this.closeMenu()}
                href="http://taluigi.netlify.com"
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
