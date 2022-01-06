/* eslint-disable react/button-has-type */

// Imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Favorite } from '..';
import {
  getFavoritesThunkCreator,
  removeFromFavoritesThunkCreator,
} from '../../store';
import {
  formattedFavorites,
  jsonToCsv,
  downloadDataFile,
} from '../../utils';

// Component
const Favorites = ({
  uid,
  favorites,
  getFavoritesThunk,
  removeFromFavoritesThunk,
  handleReadAloud,
  copyToClipboard,
}) => {
  useEffect(() => {
    if (uid && !favorites.length) {
      getFavoritesThunk();
    }
  }, [uid]);

  const handleDownload = () => {
    const json = formattedFavorites(favorites);
    const fields = ['id', 'first', 'last', 'gender', 'input.first', 'input.last', 'scores.first', 'scores.last', 'scores.full', 'matches.first', 'matches.last'];
    const paths = ['input', 'input.first', 'input.last', 'scores', 'scores.first', 'scores.last', 'scores.full', 'matches', 'matches.first', 'matches.last'];
    const csv = jsonToCsv(json, fields, paths);

    downloadDataFile(csv, 'text/csv', 'swng_favorites_list', 'csv');
  }

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
                      copyToClipboard={copyToClipboard}
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

              <button
                className="btn black black-1 waves-effect waves-light"
                title="Download To CSV"
                disabled={!uid || !favorites.length}
                onClick={handleDownload}
              >
                Download To CSV
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
  favorites: state.favorites.favorites,
});

const mapDispatchToProps = dispatch => ({
  getFavoritesThunk: () => dispatch(getFavoritesThunkCreator()),
  removeFromFavoritesThunk: (name, index) => dispatch(removeFromFavoritesThunkCreator(name, index)),
});

// Prop Types
Favorites.propTypes = {
  uid: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object),
  getFavoritesThunk: PropTypes.func,
  removeFromFavoritesThunk: PropTypes.func,
  handleReadAloud: PropTypes.func,
  copyToClipboard: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
