// Imports
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNamesThunkCreator } from '../../store/reducers/namesReducer';

// Component
export class GenerateNames extends Component {
  constructor() {
    super();

    this.state = {
      gender: 'male',
      firstName: '',
      lastName: '',
      // countryName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log('event.target.id: ', event.target.id);
    // console.log('event.target.value: ', event.target.value);

    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    // console.log('event.target.id: ', event.target.id);
    // console.log('event.target.value: ', event.target.value);

    event.preventDefault();

    const { getNamesThunk } = this.props;
    const { gender, firstName, lastName } = this.state;

    // console.log('gender in GenerateNames handleSubmit: ', gender);
    // console.log('firstName in GenerateNames handleSubmit: ', firstName);
    // console.log('lastName in GenerateNames handleSubmit: ', lastName);
    // console.log('countryName in GenerateNames handleSubmit: ', countryName);

    getNamesThunk(gender, firstName, lastName);
  }

  render() {
    const { validInitial } = this.props;
    const { firstName, lastName } = this.state;

    // console.log('validInitial in GenerateNames: ', validInitial);
    // console.log('firstName in GenerateNames: ', firstName);
    // console.log('lastName in GenerateNames: ', lastName);

    const namesCheck = firstName && lastName;

    return (
      <div className="container">
        <div className="section">
          <form onSubmit={this.handleSubmit} className="card white">
            <span className="card-title">
              <span className="gray-text-color bold-text-style">
                Generate Names
              </span>
            </span>

            <div className="input-field">
              <label htmlFor="firstName">
                First Name IRL<span className="red-text-color">*</span>
              </label>

              <input
                type="text"
                id="firstName"
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="lastName">
                Last Name IRL<span className="red-text-color">*</span>
              </label>

              <input
                type="text"
                id="lastName"
                required
                onChange={this.handleChange}
              />
            </div>

            {/* <div className="input-field">
              <label htmlFor="countryName">
                Country Name<span className="red-text-color">*</span>
              </label>

              <input
                type="text"
                id="countryName"
                required
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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

                <br />

                <div className="red-text-color bold-text-style center-text-align">
                  Please check your name inputs.
                </div>
              </Fragment>
            )}
          </form>
        </div>
      </div>
    );
  }
}

// Container
const mapStateToProps = state => ({
  validInitial: state.names.validInitial,
});

const mapDispatchToProps = dispatch => ({
  getNamesThunk(gender, firstName, lastName) {
    dispatch(getNamesThunkCreator(gender, firstName, lastName));
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
