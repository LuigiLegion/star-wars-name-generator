/* eslint-disable react/button-has-type */

// Imports
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearedAllNamesActionCreator } from '../../store/reducers/namesReducer';
import { copyToClipboardThunkCreator } from '../../store/reducers/layoutReducer';

// Initializations
const synth = window.speechSynthesis;

let voices;
const populateVoices = () => {
  voices = synth.getVoices();
};
populateVoices();

synth.onvoiceschanged = populateVoices;

// Component
class DisplayNames extends Component {
  constructor() {
    super();

    this.handleSpeak = this.handleSpeak.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSpeak(fullName) {
    const utterance = new SpeechSynthesisUtterance(fullName);
    const [voice] = voices.filter(curVoice => curVoice.voiceURI === 'Samantha');
    utterance.voice = voice;

    synth.speak(utterance);
  }

  handleCopy(fullName) {
    this.props.copyToClipboardThunk(fullName);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { clearedAllNamesAction } = this.props;

    clearedAllNamesAction();
  }

  render() {
    const { firstNames, lastNames, disabledClear } = this.props;

    // console.log('firstNames in DisplayNames: ', firstNames);
    // console.log('lastNames in DisplayNames: ', lastNames);
    // console.log('disabledClear in DisplayNames: ', disabledClear);

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
                      <li key={idx} className="name-container">
                        <span>{`${idx + 1}. `}</span>

                        <a
                          href={`https://starwars.fandom.com/wiki/Special:Search?query=${curFirstName}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {`${curFirstName} `}
                        </a>

                        <a
                          href={`https://starwars.fandom.com/wiki/Special:Search?query=${lastNames[idx]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {lastNames[idx]}
                        </a>

                        <img
                          className="name-containee"
                          src="https://img.icons8.com/material-rounded/16/000000/speaker.png"
                          alt="Text To Speech Icon"
                          title="Text To Speech"
                          onClick={() =>
                            this.handleSpeak(
                              `${curFirstName}, ${lastNames[idx]}`
                            )
                          }
                        />

                        <img
                          className="name-containee"
                          src="https://img.icons8.com/material-rounded/16/000000/clipboard.png"
                          alt="Copy To Clipboard Icon"
                          title="Copy To Clipboard"
                          onClick={() =>
                            this.handleCopy(`${curFirstName} ${lastNames[idx]}`)
                          }
                        />
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

            {this.props.copyError ? (
              <div className="red-text-color bold-text-style">
                Error! Failed to copy to clipboard. Please Try again.
              </div>
            ) : null}
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
  copyError: state.layout.copyError,
  disabledClear: state.names.disabledClear,
});

const mapDispatchToProps = dispatch => ({
  copyToClipboardThunk(text) {
    dispatch(copyToClipboardThunkCreator(text));
  },
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
  copyError: PropTypes.bool,
  disabledClear: PropTypes.bool,
  copyToClipboardThunk: PropTypes.func,
  clearedAllNamesAction: PropTypes.func,
};
