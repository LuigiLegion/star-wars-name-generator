// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const Changelog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12 xl12">
          <div className="section">
            <div className="card">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="text-style-bold">Changelog</span>
                </span>

                <div className="divider" />

                <div className="card-content">
                  <div>
                    <span className="text-style-bold">12/19/2019</span>

                    <span> - Initial release in celebration of </span>

                    <span className="text-style-italic">The Rise of Skywalker</span>

                    <span> movie premiere.</span>
                  </div>

                  <div className="section">
                    <span className="text-style-bold">05/04/2020</span>

                    <span> - Name Read Aloud, Name Copy To Clipboard, and Name Origin Search features in celebration of Star Wars Day.</span>
                  </div>

                  <div>
                    <span className="text-style-bold">08/11/2021</span>

                    <span> - Random Name Generation, Name Match Score, Originating Input Name Display, and Name Gender Display features in celebration of </span>

                    <span className="text-style-italic">The Bad Batch</span>

                    <span> season 1 finale.</span>
                  </div>

                  <div className="section">
                    <span className="text-style-bold">09/06/2021</span>

                    <span> - Matching Letters Highlighting feature in celebration of </span>

                    <span className="text-style-italic">Visions</span>

                    <span> series premiere.</span>
                  </div>

                  <div>
                    <span className="text-style-bold">01/04/2021</span>

                    <span> - Authentication, Favorites List, and Download To CSV features in celebration of </span>

                    <span className="text-style-italic">The Book of Boba Fett</span>

                    <span> series premiere.</span>
                  </div>
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
export default Changelog;
