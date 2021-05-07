// Imports
import React from 'react';

// Component
const SuggestionBox = () => {
  return (
    <div className="text-align-center padding-bottom">
      <div>Got any suggestions for improvement?</div>

      <div>
        Message them to me{' '}
        <a
          href="https://twitter.com/LuigiLegion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-style-bold">@LuigiLegion</span>
        </a>
      </div>
    </div>
  );
};

// Exports
export default SuggestionBox;
