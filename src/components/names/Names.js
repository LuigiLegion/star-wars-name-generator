/* eslint-disable react/button-has-type */

// Imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Name } from '..';
import {
  clearedNamesActionCreator,
  addToFavoritesThunkCreator,
} from '../../store';
import { toast } from '../../utils';

// Component
const Names = ({
  uid,
  names,
  clearedNamesAction,
  addToFavoritesThunk,
  handleReadAloud,
  copyToClipboard
}) => {
  const handleClear = () => {
    clearedNamesAction();
    toast('Names cleared', 'green');
  };

  return (
    <div className="col s12 m6 l6 xl6">
      <div className="container">
        <div className="section center">
          <div className="card white">
            <div className="card-content names-list grey-text text-darken-3">
              <span className="card-title">
                <span className="text-style-bold">
                  Names List
                </span>
              </span>

              {names.length ? (
                <div className="section">
                  {names.map((name, idx) => (
                    <Name
                      key={idx}
                      uid={uid}
                      index={idx}
                      name={name}
                      handleReadAloud={handleReadAloud}
                      copyToClipboard={copyToClipboard}
                      addToFavoritesThunk={addToFavoritesThunk}
                    />
                  ))}
                </div>
              ) : (
                <div className="section">
                  Generate names to populate this list.
                </div>
              )}

              <button
                className="btn black black-1 waves-effect waves-light"
                title="Clear"
                disabled={!names.length}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  names: state.names.names,
});

const mapDispatchToProps = dispatch => ({
  clearedNamesAction: () => dispatch(clearedNamesActionCreator()),
  addToFavoritesThunk: (name, index) => dispatch(addToFavoritesThunkCreator(name, index)),
});

// Prop Types
Names.propTypes = {
  uid: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.object),
  clearedNamesAction: PropTypes.func,
  addToFavoritesThunk: PropTypes.func,
  handleReadAloud: PropTypes.func,
  copyToClipboard: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Names);
