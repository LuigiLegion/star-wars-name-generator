import React from 'react';
import moment from 'moment';

const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">
            <span className="bold-text-style">Notifications</span>
          </span>

          <ul className="notifications">
            {notifications &&
              notifications.map(curNotification => {
                return (
                  <li key={curNotification.id}>
                    <span className="blue-text-color">
                      <span className="bold-text-style">
                        {curNotification.user}{' '}
                      </span>
                    </span>

                    <span>{curNotification.content}</span>

                    <div className="grey-text note-date">
                      {moment(curNotification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
