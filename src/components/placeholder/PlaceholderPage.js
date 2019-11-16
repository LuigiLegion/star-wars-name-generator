import React from 'react';

const PlaceholderPage = props => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m12">
          <div className="section">
            <div className="card z-depth-0">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="bold-text-style">Placeholder</span>
                </span>

                <ul className="placeholder">
                  <li>
                    <span>This is a placeholder page.</span>
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

export default PlaceholderPage;
