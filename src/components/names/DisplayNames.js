// Imports
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearedAllNamesActionCreator } from '../../store/reducers/namesReducer';
import { copyToClipboardThunkCreator } from '../../store/reducers/layoutReducer';
import { toastNotification } from '../../helpers';

// Initializations
const synth = window.speechSynthesis;

let voices;
const populateVoices = () => {
  voices = synth.getVoices();
};
populateVoices();

synth.onvoiceschanged = populateVoices;

// Component
const DisplayNames = ({
  firstNames,
  lastNames,
  disabledClear,
  copyError,
  clearedAllNamesAction,
  copyToClipboardThunk,
}) => {
  const handleClear = () => {
    clearedAllNamesAction();
    toastNotification('Names Cleared Succesfully', 'green');
  };

  const handleCopy = fullName => {
    copyToClipboardThunk(fullName);
  };

  const handleSpeak = fullName => {
    const utterance = new SpeechSynthesisUtterance(fullName);
    const [voice] = voices.filter(curVoice => curVoice.voiceURI === 'Samantha');
    utterance.voice = voice;

    synth.speak(utterance);
  };

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content grey-text text-darken-3 center">
          <span className="card-title">
            <span className="text-style-bold">Names List</span>
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
                          handleSpeak(`${curFirstName}, ${lastNames[idx]}`)
                        }
                      />

                      <img
                        className="name-containee"
                        src="https://img.icons8.com/material-rounded/16/000000/clipboard.png"
                        alt="Copy To Clipboard Icon"
                        title="Copy To Clipboard"
                        onClick={() =>
                          handleCopy(`${curFirstName} ${lastNames[idx]}`)
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

          <button
            className="btn black black-1 z-depth-0 clear-button"
            type="button"
            disabled={disabledClear}
            onClick={handleClear}
          >
            Clear
          </button>

          {copyError ? (
            <div className="text-color-red text-style-bold">
              Error! Failed to copy to clipboard.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  firstNames: state.names.firstNames,
  lastNames: state.names.lastNames,
  disabledClear: state.names.disabledClear,
  copyError: state.layout.copyError,
});

const mapDispatchToProps = dispatch => ({
  clearedAllNamesAction() {
    dispatch(clearedAllNamesActionCreator());
  },
  copyToClipboardThunk(text) {
    dispatch(copyToClipboardThunkCreator(text));
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
  copyError: PropTypes.bool,
  clearedAllNamesAction: PropTypes.func,
  copyToClipboardThunk: PropTypes.func,
};
