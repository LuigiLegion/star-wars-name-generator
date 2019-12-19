import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getFirstNameThunkCreator,
  getLastNameThunkCreator,
} from '../../store/reducers/namesReducer';

export class GenerateNames extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      // countryName: '',
      gender: 'Male',
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

    const { getFirstNameThunk, getLastNameThunk } = this.props;
    const { firstName, lastName, gender } = this.state;

    // console.log('firstName in GenerateNames handleSubmit: ', firstName);
    // console.log('lastName in GenerateNames handleSubmit: ', lastName);
    // console.log('countryName in GenerateNames handleSubmit: ', countryName);
    // console.log('gender in GenerateNames handleSubmit: ', gender);

    getFirstNameThunk(firstName, gender);
    getLastNameThunk(lastName);
  }

  render() {
    const { firstName, lastName } = this.state;

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
                First Name<span className="red-text-color">*</span>
              </label>

              <input
                type="text"
                id="firstName"
                required
                pattern="[A-Za-z]{1,32}"
                title="May only contain uppercase and lowercase letters"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="lastName">
                Last Name<span className="red-text-color">*</span>
              </label>

              <input
                type="text"
                id="lastName"
                required
                pattern="[A-Za-z]{1,32}"
                title="May only contain uppercase and lowercase letters"
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
                pattern="[A-Za-z]{1,32}"
                title="May only contain uppercase and lowercase letters"
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              className="btn black lighten-1 z-depth-0"
              disabled={!namesCheck}
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getFirstNameThunk(firstName, gender) {
    dispatch(getFirstNameThunkCreator(firstName, gender));
  },
  getLastNameThunk(lastName) {
    dispatch(getLastNameThunkCreator(lastName));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(GenerateNames);
