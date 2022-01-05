/* eslint-disable react/button-has-type */

// Imports
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNameThunkCreator, getRandomNameThunkCreator } from '../../store';

// Component
const Generate = ({
  validInitial,
  getNameThunk,
  getRandomNameThunk,
}) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
  });

  const namesCheck = state.firstName && state.lastName;

  const handleChange = event => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  const handleClick = event => {
    event.preventDefault();

    getRandomNameThunk(state.gender);
  };

  const handleSubmit = event => {
    event.preventDefault();

    getNameThunk(state.firstName, state.lastName, state.gender);
  };

  return (
    <div className="col s12 m6 l6 xl6">
      <div className="container">
        <div className="section center">
          <div className="card white">
            <form
              className="card-content grey-text text-darken-3"
              onSubmit={handleSubmit}
            >
              <span className="card-title">
                <span className="text-color-gray text-style-bold">
                  Generate Names
                </span>
              </span>

              <div className="input-field">
                <label htmlFor="firstName">
                  <span>Any First Name</span>

                  <span className="text-color-red">*</span>
                </label>

                <input
                  type="text"
                  id="firstName"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="lastName">
                  <span>Any Last Name</span>

                  <span className="text-color-red">*</span>
                </label>

                <input
                  type="text"
                  id="lastName"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="gender">
                  <span>Gender</span>

                  <span className="text-color-red">*</span>
                </label>

                <br />
                <br />

                <select
                  id="gender"
                  className="browser-default"
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    --Please choose an option--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="all">Nonbinary</option>
                </select>
              </div>

              <button
                className="btn black lighten-1 waves-effect waves-light"
                title="Generate"
                disabled={!namesCheck}
              >
                Generate
              </button>

              {!validInitial && (
                <div className="section">
                  <div className="text-color-red text-style-bold text-align-center">
                    Names in a galaxy far far away usually start with a letter.
                  </div>

                  <div className="text-color-red text-style-bold text-align-center">
                    Please check your input names.
                  </div>
                </div>
              )}

              <div className="divider" />

              <div className="section">
                <div>
                  <label>Can't think of input names or simply in a rush?</label>
                </div>

                <div>
                  <label>Generate a random name!</label>
                </div>
              </div>

              <button
                className="btn black lighten-1 waves-effect waves-light"
                title="I'm Feeling Lucky"
                onClick={handleClick}
              >
                I'm Feeling Lucky
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  validInitial: state.names.validInitial,
});

const mapDispatchToProps = dispatch => ({
  getNameThunk: (firstName, lastName, gender) =>
    dispatch(getNameThunkCreator(firstName, lastName, gender)),
  getRandomNameThunk: gender =>
    dispatch(getRandomNameThunkCreator(gender)),
});

// Prop Types
Generate.propTypes = {
  validInitial: PropTypes.bool,
  getNameThunk: PropTypes.func,
  getRandomNameThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Generate);
