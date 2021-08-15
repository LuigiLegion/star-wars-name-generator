/* eslint-disable react/button-has-type */

// Imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearedNamesActionCreator,
  copyToClipboardThunkCreator,
} from '../../store';
import { toastNotification } from '../../utils';

// Initializations
const synth = window.speechSynthesis;

let voices;
const populateVoices = () => {
  voices = synth.getVoices();
};
populateVoices();

synth.onvoiceschanged = populateVoices;

// Component
const NamesDisplay = ({
  names,
  disabledClear,
  copyError,
  clearedNamesAction,
  copyToClipboardThunk,
}) => {
  const handleCopy = fullName => {
    copyToClipboardThunk(fullName);
  };

  const handleSpeak = fullName => {
    const utterance = new SpeechSynthesisUtterance(fullName);
    const [voice] = voices.filter(curVoice => curVoice.voiceURI === 'Samantha');
    utterance.voice = voice;

    synth.speak(utterance);
  };

  const handleSubmit = event => {
    event.preventDefault();

    clearedNamesAction();
    toastNotification('Names Cleared Succesfully', 'green');
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
                <span className="text-style-bold">Names List</span>
              </span>

              {names.length ? (
                <>
                  <div className="section">
                    <div>
                      <label>These aren't the names you're looking for?</label>
                    </div>

                    <div>
                      <label>Try shortening your input names!</label>
                    </div>
                  </div>

                  <ul>
                    {names.map((name, idx) => {
                      return (
                        <li key={idx} className="name-container white-space-pre">
                          <span className="text-style-bold">{`${idx + 1}. `}</span>

                          <a
                            href={`https://starwars.fandom.com/wiki/Special:Search?query=${name.first}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name.first}
                          </a>

                          <a
                            className="name-containee"
                            href={`https://starwars.fandom.com/wiki/Special:Search?query=${name.last}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name.last}
                          </a>

                          <img
                            className="name-containee"
                            src={`/icons/${name.gender}.png`}
                            alt="Gender Icon"
                          />

                          <span className="name-containee">
                            <span> (</span>

                            {name.input ?
                              <span
                                className="text-style-italic"
                                title="Originating Input Name">
                                  {name.input}
                              </span>
                              :
                              <span
                                className="text-style-italic"
                                title="Randomly Generated Names Have No Originating Input Name">
                                  N/A
                              </span>
                            }

                            <span>, </span>

                            {name.scores ?
                              <span
                                className="text-style-italic"
                                title={`First Name: ${name.scores.first.toFixed(2)}% match\nLast Name: ${name.scores.last.toFixed(2)}% match`}>
                                {`${name.scores.full.toFixed(2)}% match`}
                              </span>
                              :
                              <span
                                className="text-style-italic"
                                title="Randomly Generated Names Have No Name Match Score">
                                  N/A
                              </span>
                            }

                            <span>)</span>
                          </span>

                          <img
                            className="name-containee cursor-pointer"
                            src="/icons/speaker.png"
                            alt="Read Aloud Icon"
                            title="Read Aloud"
                            onClick={() =>
                              handleSpeak(`${name.first}, ${name.last}`)
                            }
                          />

                          <img
                            className="name-containee cursor-pointer"
                            src="/icons/clipboard.png"
                            alt="Copy To Clipboard Icon"
                            title="Copy To Clipboard"
                            onClick={() =>
                              handleCopy(`${name.first} ${name.last}`)
                            }
                          />
                        </li>
                      );
                    })}
                  </ul>

                </>
              ) : (
                <div className="section">
                  Generate names to populate this list.
                </div>
              )}

              <button
                className="btn black black-1 waves-effect waves-light"
                disabled={disabledClear}
              >
                Clear
              </button>

              {copyError ? (
                <div className="text-color-red text-style-bold">
                  Error! Failed to copy to clipboard.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  names: state.names.names,
  disabledClear: state.names.disabledClear,
  copyError: state.layout.copyError,
});

const mapDispatchToProps = dispatch => ({
  clearedNamesAction: () => dispatch(clearedNamesActionCreator()),
  copyToClipboardThunk: text => dispatch(copyToClipboardThunkCreator(text)),
});

// Prop Types
NamesDisplay.propTypes = {
  names: PropTypes.arrayOf(PropTypes.object),
  disabledClear: PropTypes.bool,
  copyError: PropTypes.bool,
  clearedNamesAction: PropTypes.func,
  copyToClipboardThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NamesDisplay);
