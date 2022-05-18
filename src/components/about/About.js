// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12 xl12">
          <div className="section">
            <div className="card">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="text-style-bold">
                    About
                  </span>
                </span>

                <div className="divider" />

                <div className="card-content">
                  <div>
                    Ever wondered what your name would be had you lived in the
                    Star Wars universe?
                  </div>

                  <div>
                    I know I have, which is why I set out to build this app!
                  </div>

                  <div className="section">
                    With a little over 22,000 first names and 10,000 last
                    names from both Canon and Legends and a set of name matching
                    algorithms, you're bound to find your very own Star Wars
                    name based on any name.
                  </div>

                  <div>I hope you like it, enjoy!</div>
                </div>

                <NavLink
                  className="text-style-bold"
                  to="/"
                >
                  ← Back To Main Page
                </NavLink>
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
