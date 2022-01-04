// Imports
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

// Component
const Favorite = ({
  index,
  favorite,
  handleReadAloud,
  copyToClipboardThunk,
  removeFromFavoritesThunk,
}) => {
  return (
    <div className="card white-space-pre">
      <div className="card-content name-card-container">
        <div className="name-container">
          <span className="text-style-bold">{`${index + 1}. `}</span>

          <a
            href={`https://starwars.fandom.com/wiki/Special:Search?query=${favorite.first}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {favorite.first}
          </a>

          <a
            className="name-containee"
            href={`https://starwars.fandom.com/wiki/Special:Search?query=${favorite.last}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {favorite.last}
          </a>

          {favorite.scores ?
            <>
              <span
                className="name-containee"
                title={`Originating Input Name: ${favorite.input.first} ${favorite.input.last}\nMatch: ${favorite.scores.full.toFixed(2)}%`}
              >
                {`(${favorite.scores.full.toFixed(2)}% match,`}
              </span>

              <span
                className="name-containee"
                title="Favorited At Timestamp"
              >
                {`favorited at ${moment(favorite.createdAt).format('h:mm A, MM/DD/YYYY')})`}
              </span>
            </>
            :
            <span
              className="name-containee"
              title="Favorited At Timestamp"
            >
              {`(Favorited at ${moment(favorite.createdAt).format('h:mm A, MM/DD/YYYY')})`}
            </span>
          }

          <img
            className="name-containee"
            src={`/icons/${favorite.gender}.png`}
            alt="Gender Icon"
            title="Gender"
          />

          <img
            className="name-containee cursor-pointer"
            src="/icons/speaker.png"
            alt="Read Aloud Icon"
            title="Read Aloud"
            onClick={() =>
              handleReadAloud(`${favorite.first}, ${favorite.last}`)
            }
          />

          <img
            className="name-containee cursor-pointer"
            src="/icons/clipboard.png"
            alt="Copy To Clipboard Icon"
            title="Copy To Clipboard"
            onClick={() =>
              copyToClipboardThunk(`${favorite.first} ${favorite.last}`)
            }
          />

          <img
            className="name-containee cursor-pointer"
            src="/icons/unfavorite.png"
            alt="Remove From Favorites Icon"
            title="Remove From Favorites"
            onClick={() => removeFromFavoritesThunk(favorite, index)}
          />
        </div>

        <span id="activator" className="card-title activator">
          <i className="material-icons">expand_more</i>
        </span>
      </div>

      <div className="card-reveal">
        <div className="name-card-container text-align-start">
          {favorite.scores ?
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>Input Name</th>

                  <th>Generated Name</th>

                  <th>Match Score</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{favorite.input.first}</td>

                  <td>{favorite.first.split('').map((letter, idx) => (
                    <span
                      key={idx}
                      className={favorite.matches.first[idx] ? 'text-style-bold' : ''}
                    >
                      {letter}
                    </span>))}
                  </td>

                  <td>{`${favorite.scores.first.toFixed(2)}%`}</td>
                </tr>

                <tr>
                  <td>{favorite.input.last}</td>

                  <td>{favorite.last.split('').map((letter, idx) => (
                    <span
                      key={idx}
                      className={favorite.matches.last[idx] ? 'text-style-bold' : ''}
                    >
                      {letter}
                    </span>))}
                  </td>

                  <td>{`${favorite.scores.last.toFixed(2)}%`}</td>
                </tr>

                <tr>
                  <td>-</td>

                  <td>-</td>

                  <td>{`${favorite.scores.full.toFixed(2)}%`}</td>
                </tr>
              </tbody>
            </table>
            :
            <div>
              <div>
                Randomly generated names
              </div>

              <div>
                have no Name Match Score.
              </div>
            </div>
          }

          <span id="revealer" className="card-title">
            <i className="material-icons">close</i>
          </span>
        </div>
      </div>
    </div>
  )
};

// Prop Types
Favorite.propTypes = {
  index: PropTypes.number,
  favorite: PropTypes.object,
  handleReadAloud: PropTypes.func,
  copyToClipboardThunk: PropTypes.func,
  removeFromFavoritesThunk: PropTypes.func,
};

// Exports
export default Favorite;
