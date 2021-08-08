// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const About = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m12">
          <div className="section">
            <div className="card">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="text-style-bold">About</span>
                </span>

                <ul>
                  <li>
                    <div>
                      Ever wondered what your name would be had you lived in the
                      Star Wars universe?
                    </div>

                    <div>
                      I know I have, which is why I set out to build this app!
                    </div>

                    <br />

                    <div>
                      With a little over 22,000 first names and 10,000 last
                      names from both Canon and Legends and a set of matching
                      algorithms, you're bound to find your very own Star Wars
                      name based on any name.
                    </div>

                    <br />

                    <div>I hope you like it, enjoy!</div>
                  </li>
                </ul>

                <br />

                <ul>
                  <li>
                    <NavLink to="/">
                      <span className="text-style-bold">
                        ← Back To Main Page
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exports
export default About;
