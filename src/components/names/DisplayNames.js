import React from 'react';
import { connect } from 'react-redux';

const DisplayNames = ({ firstNames, lastNames }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">
            <span className="bold-text-style">Names List</span>
          </span>

          <ul className="names">
            {firstNames.length ? (
              firstNames.map((curFirstName, idx) => {
                return (
                  <li key={idx}>
                    <span>{`${idx + 1}. ${curFirstName} ${
                      lastNames[idx]
                    }`}
                    </span>
                  </li>
                );
              })
            ) : (
              <li>
                <span>Generate names to populate this list.</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  firstNames: state.names.firstNames,
  lastNames: state.names.lastNames,
});

export default connect(mapStateToProps)(DisplayNames);
