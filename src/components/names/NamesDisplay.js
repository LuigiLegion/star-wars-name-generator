/* eslint-disable react/button-has-type */

// Imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Name } from '..';
import {
  clearedNamesActionCreator,
  copyToClipboardThunkCreator,
} from '../../store';
import { toast } from '../../utils';

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

  const handleClear = () => {
    clearedNamesAction();
    toast('Names cleared', 'green');
  };

  return (
    <div className="col s12 m6 l6 xl6">
      <div className="container">
        <div className="section center">
          <div className="card white">
            <div className="card-content names-display grey-text text-darken-3">
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

                  {names.map((name, idx) => <Name key={idx} index={idx} name={name} handleCopy={handleCopy} handleSpeak={handleSpeak} />)}

                </>
              ) : (
                <div className="section">
                  Generate names to populate this list.
                </div>
              )}

              <button
                className="btn black black-1 waves-effect waves-light"
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
