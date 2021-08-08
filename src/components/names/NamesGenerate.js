/* eslint-disable react/button-has-type */

// Imports
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNamesThunkCreator, getRandomNamesThunkCreator } from '../../store';

// Component
const NamesGenerate = ({ validInitial, getNamesThunk, getRandomNamesThunk }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    // countryName: '',
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

    getRandomNamesThunk(state.gender);
  };

  const handleSubmit = event => {
    event.preventDefault();

    getNamesThunk(state.firstName, state.lastName, state.gender);
  };

  return (
    <div className="container">
      <div className="section center">
        <form onSubmit={handleSubmit} className="card white">
          <span className="card-title">
            <span className="text-color-gray text-style-bold">
              Generate Names
            </span>
          </span>

          <div className="input-field">
            <label htmlFor="firstName">
              Any First Name<span className="text-color-red">*</span>
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
              Any Last Name<span className="text-color-red">*</span>
            </label>

            <input type="text" id="lastName" required onChange={handleChange} />
          </div>

          {/* <div className="input-field">
              <label htmlFor="countryName">
                Country Name<span className="text-color-red">*</span>
              </label>

              <input
                type="text"
                id="countryName"
                required
                onChange={handleChange}
              />
            </div> */}

          <div className="input-field col s12">
            <label htmlFor="gender">
              Gender<span className="text-color-red">*</span>
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
              <option value="all">Other</option>
            </select>
          </div>

          <button className="btn black lighten-1" disabled={!namesCheck}>
            Generate
          </button>

          {validInitial ? null : (
            <>
              <div className="text-color-red text-style-bold text-align-center">
                Names in a galaxy far far away usually start with a letter.
              </div>

              <div className="text-color-red text-style-bold text-align-center">
                Please check your name inputs.
              </div>
            </>
          )}

          <br />

          <div>
            <label>Can't think of input names or simply in a rush?</label>
          </div>

          <div>
            <label>Generate a random name!</label>
          </div>

          <button className="btn black lighten-1" onClick={handleClick}>
            I'm Feeling Lucky
          </button>
        </form>
      </div>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  validInitial: state.names.validInitial,
});

const mapDispatchToProps = dispatch => ({
  getNamesThunk: (firstName, lastName, gender) =>
    dispatch(getNamesThunkCreator(firstName, lastName, gender)),
  getRandomNamesThunk: gender =>
    dispatch(getRandomNamesThunkCreator(gender)),
});

// Prop Types
NamesGenerate.propTypes = {
  validInitial: PropTypes.bool,
  getNamesThunk: PropTypes.func,
  getRandomNamesThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NamesGenerate);
