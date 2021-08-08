// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const Changelog = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m12">
          <div className="section">
            <div className="card">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="text-style-bold">Changelog</span>
                </span>

                <ul>
                  <li>
                    <div>
                      <span className="text-style-bold">12/19/2019</span>

                      <span> - Initial release in celebration of </span>

                      <span className="text-style-italic">The Rise of Skywalker</span>

                      <span> movie release.</span>
                    </div>

                    <br />

                    <div>
                      <span className="text-style-bold">05/04/2020</span>

                      <span> - Name Read Aloud, Name Copy to Clipboard, and Name Origin Search features in celebration of Star Wars Day.</span>
                    </div>

                    <br />

                    <div>
                      <span className="text-style-bold">08/07/2021</span>

                      <span> - Random Name Generation feature in celebration of </span>

                      <span className="text-style-italic">The Bad Batch</span>

                      <span> season 1 finale.</span>
                    </div>
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
export default Changelog;