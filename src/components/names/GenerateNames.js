import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFirstNameThunkCreator } from '../../store/reducers/namesReducer';

export class GenerateNames extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      countryName: '',
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

    const { firstName, gender } = this.state;

    // console.log('firstName in GenerateNames handleSubmit: ', firstName);
    // console.log('gender in GenerateNames handleSubmit: ', gender);

    this.props.getFirstNameThunk(firstName, gender);
  }

  render() {
    // const { auth, authError } = this.props;

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

            <div className="input-field">
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
            </div>

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

            <button className="btn blue lighten-1 z-depth-0">Generate</button>

            {/* <div className="red-text center">
            {authError ? (
              <p>{authError}</p>
            ) : this.state.accessTokenError ? (
              'Invalid Access Token! Please try again.'
            ) : null}
          </div> */}
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
});

export default connect(
  null,
  mapDispatchToProps
)(GenerateNames);
