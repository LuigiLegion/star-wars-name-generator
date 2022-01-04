/* eslint-disable react/button-has-type */

// Imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Favorite } from '..';
import {
  getFavoritesThunkCreator,
  copyToClipboardThunkCreator,
  removeFromFavoritesThunkCreator,
} from '../../store';
// import { toast } from '../../utils';

// Component
const Favorites = ({
  uid,
  favorites,
  getFavoritesThunk,
  copyToClipboardThunk,
  removeFromFavoritesThunk,
  handleReadAloud,
}) => {
  useEffect(() => {
    if (uid && !favorites.length) {
      getFavoritesThunk();
    }
  }, [uid]);

  // const handleDownloadToCsv = () => {
  //   console.log({ favorites });
  //   toast('CSV file downloaded', 'green');
  // };

  return (
    <div className="col s12 m12 l12 xl12">
      <div className="container">
        <div className="section center">
          <div className="card white">
            <div className="card-content names-list grey-text text-darken-3">
              <span className="card-title">
                <span className="text-style-bold">Favorites List</span>
              </span>

              {uid ? favorites.length ? (
                <div className="section">
                  {favorites.map((favorite, idx) => (
                    <Favorite
                      key={idx}
                      index={idx}
                      favorite={favorite}
                      handleReadAloud={handleReadAloud}
                      copyToClipboardThunk={copyToClipboardThunk}
                      removeFromFavoritesThunk={removeFromFavoritesThunk}
                    />))}
                </div>
              ) : (
                <div className="section">
                  Favorite names to populate this list.
                </div>
              ) : (
                <div className="section">
                  Favorites List is a feature available to registered users only.
                </div>
              )}

              {/* <button
                className="btn black black-1 waves-effect waves-light"
                disabled={!uid || !favorites.length}
                onClick={handleDownloadToCsv}
              >
                Download To CSV
              </button> */}
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
  favorites: state.favorites.favorites,
});

const mapDispatchToProps = dispatch => ({
  getFavoritesThunk: () => dispatch(getFavoritesThunkCreator()),
  copyToClipboardThunk: text => dispatch(copyToClipboardThunkCreator(text)),
  removeFromFavoritesThunk: (name, index) => dispatch(removeFromFavoritesThunkCreator(name, index)),
});

// Prop Types
Favorites.propTypes = {
  uid: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object),
  getFavoritesThunk: PropTypes.func,
  copyToClipboardThunk: PropTypes.func,
  removeFromFavoritesThunk: PropTypes.func,
  handleReadAloud: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
