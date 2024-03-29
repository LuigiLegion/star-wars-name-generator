// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const Name = ({
  uid,
  index,
  name,
  handleReadAloud,
  copyToClipboard,
  addToFavoritesThunk
}) => {
  return (
    <div className="card white-space-pre">
      <div className="card-content name-card-container">
        <div className="name-container">
          <span className="text-style-bold">{`${index + 1}. `}</span>

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

          {name.scores ?
            <span
              className="name-containee"
              title={`Originating Input Name: ${name.input.first} ${name.input.last}\nMatch: ${name.scores.full.toFixed(2)}%`}
            >
              {`(${name.scores.full.toFixed(2)}% match)`}
            </span>
            :
            <span
              className="name-containee"
              title="Randomly generated names have no Name Match Score">
                (N/A)
            </span>
          }

          <img
            className="name-containee"
            src={`/icons/${name.gender}.png`}
            alt="Gender Icon"
            title="Gender"
          />

          <img
            className="name-containee cursor-pointer"
            src="/icons/speaker.png"
            alt="Read Aloud Icon"
            title="Read Aloud"
            onClick={() =>
              handleReadAloud(`${name.first}, ${name.last}`)
            }
          />

          <img
            className="name-containee cursor-pointer"
            src="/icons/clipboard.png"
            alt="Copy To Clipboard Icon"
            title="Copy To Clipboard"
            onClick={() =>
              copyToClipboard(`${name.first} ${name.last}`)
            }
          />

          {uid && <img
            className="name-containee cursor-pointer"
            src="/icons/favorite.png"
            alt="Add To Favorites Icon"
            title="Add To Favorites"
            onClick={() => addToFavoritesThunk(name, index)}
          />}
        </div>

        <span id="activator" className="card-title activator">
          <i className="material-icons">expand_more</i>
        </span>
      </div>

      <div className="card-reveal">
        <div className="name-card-container text-align-start">
          {name.scores ?
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
                  <td>{name.input.first}</td>

                  <td>{name.first.split('').map((letter, idx) => (
                    <span
                      key={idx}
                      className={name.matches.first[idx] ? 'text-style-bold' : ''}
                    >
                      {letter}
                    </span>))}
                  </td>

                  <td>{`${name.scores.first.toFixed(2)}%`}</td>
                </tr>

                <tr>
                  <td>{name.input.last}</td>

                  <td>{name.last.split('').map((letter, idx) => (
                    <span
                      key={idx}
                      className={name.matches.last[idx] ? 'text-style-bold' : ''}
                    >
                      {letter}
                    </span>))}
                  </td>

                  <td>{`${name.scores.last.toFixed(2)}%`}</td>
                </tr>

                <tr>
                  <td>-</td>

                  <td>-</td>

                  <td>{`${name.scores.full.toFixed(2)}%`}</td>
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
Name.propTypes = {
  uid: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.object,
  handleReadAloud: PropTypes.func,
  copyToClipboard: PropTypes.func,
  addToFavoritesThunk: PropTypes.func,
};

// Exports
export default Name;
