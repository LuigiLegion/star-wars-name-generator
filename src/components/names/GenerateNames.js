/* eslint-disable react/button-has-type */

// Imports
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNamesThunkCreator } from '../../store/reducers/namesReducer';

// Component
const GenerateNames = ({ validInitial, getNamesThunk }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    // countryName: '',
    gender: 'male',
  });

  const handleChange = event => {
    // console.log('event.target.id: ', event.target.id);
    // console.log('event.target.value: ', event.target.value);

    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = event => {
    // console.log('event.target.id: ', event.target.id);
    // console.log('event.target.value: ', event.target.value);

    event.preventDefault();
    // console.log('firstName in GenerateNames handleSubmit: ', state.firstName);
    // console.log('lastName in GenerateNames handleSubmit: ', state.lastName);
    // console.log('countryName in GenerateNames handleSubmit: ', state.countryName);
    // console.log('gender in GenerateNames handleSubmit: ', state.gender);

    getNamesThunk(state.firstName, state.lastName, state.gender);
  };

  const namesCheck = state.firstName && state.lastName;

  // console.log('validInitial in GenerateNames: ', validInitial);
  // console.log('firstName in GenerateNames: ', state.firstName);
  // console.log('lastName in GenerateNames: ', state.lastName);
  // console.log('gender in GenerateNames: ', state.gender);
  // console.log('namesCheck in GenerateNames: ', namesCheck);

  return (
    <div className="container">
      <div className="section center">
        <form onSubmit={handleSubmit} className="card white">
          <span className="card-title">
            <span className="gray-text-color bold-text-style">
              Generate Names
            </span>
          </span>

          <div className="input-field">
            <label htmlFor="firstName">
              Any First Name<span className="red-text-color">*</span>
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
              Any Last Name<span className="red-text-color">*</span>
            </label>

            <input type="text" id="lastName" required onChange={handleChange} />
          </div>

          {/* <div className="input-field">
              <label htmlFor="countryName">
                Country Name<span className="red-text-color">*</span>
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
              Gender<span className="red-text-color">*</span>
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

          <button
            className="btn black lighten-1 z-depth-0"
            disabled={!namesCheck}
          >
            Generate
          </button>

          {validInitial ? null : (
            <Fragment>
              <div className="red-text-color bold-text-style center-text-align">
                Names in a galaxy far far away usually start with a letter.
              </div>

              <div className="red-text-color bold-text-style center-text-align">
                Please check your name inputs.
              </div>
            </Fragment>
          )}
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
  getNamesThunk(firstName, lastName, gender) {
    dispatch(getNamesThunkCreator(firstName, lastName, gender));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateNames);

// Prop Types
GenerateNames.propTypes = {
  validInitial: PropTypes.bool,
  getNamesThunk: PropTypes.func,
};
