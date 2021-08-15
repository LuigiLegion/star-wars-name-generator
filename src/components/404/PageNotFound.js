// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const PageNotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12 xl12">
          <div className="section">
            <div className="card">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="text-style-bold">404 - Page Not Found</span>
                </span>

                <div className="divider" />

                <div className="card-content">
                  <div>
                    This route does not exist.
                  </div>
                </div>

                <NavLink to="/">
                  <span className="text-style-bold">← Back To Main Page</span>
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
export default PageNotFound;
