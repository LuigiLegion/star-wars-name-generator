// Imports
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearedAllNamesActionCreator } from '../../store/reducers/namesReducer';

// Component
class DisplayNames extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { clearedAllNamesAction } = this.props;

    clearedAllNamesAction();
  }

  render() {
    const { firstNames, lastNames, disabledClear } = this.props;

    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">
              <span className="bold-text-style">Names List</span>
            </span>

            <ul className="names">
              {firstNames.length ? (
                <Fragment>
                  <div>
                    <label>These aren't the names you're looking for?</label>
                  </div>

                  <div>
                    <label>Try shortening your name inputs!</label>
                  </div>

                  <br />

                  {firstNames.map((curFirstName, idx) => {
                    return (
                      <li key={idx}>
                        <span>
                          {`${idx + 1}. ${curFirstName} ${lastNames[idx]}`}
                        </span>
                      </li>
                    );
                  })}
                </Fragment>
              ) : (
                <li>
                  <span>Generate names to populate this list.</span>
                </li>
              )}
            </ul>

            <form className="clear-form" onSubmit={this.handleSubmit}>
              <button
                className="btn black black-1 z-depth-0"
                disabled={disabledClear}
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Container
const mapStateToProps = state => ({
  firstNames: state.names.firstNames,
  lastNames: state.names.lastNames,
  disabledClear: state.names.disabledClear,
});

const mapDispatchToProps = dispatch => ({
  clearedAllNamesAction() {
    dispatch(clearedAllNamesActionCreator());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayNames);

// Prop Types
DisplayNames.propTypes = {
  firstNames: PropTypes.array,
  lastNames: PropTypes.array,
  disabledClear: PropTypes.bool,
  clearedAllNamesAction: PropTypes.func,
};
