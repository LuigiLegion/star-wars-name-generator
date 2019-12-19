import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearedAllNamesActionCreator } from '../../store/reducers/namesReducer';
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
                firstNames.map((curFirstName, idx) => {
                  return (
                    <li key={idx}>
                      <span>
                        {`${idx + 1}. ${curFirstName} ${lastNames[idx]}`}
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
