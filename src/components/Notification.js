import React from 'react';

const TopNotificationBar = ({ children, onClose }) => {
  return (
    <div className="top-notification-bar">
      <div className="notification-content">
<h2>Unlock premium stats
    </h2>  
    <p>
        Get up to 10TB of storage for a limited time</p>  </div>
      <button className="close-button" onClick={onClose}>
Upgrade      </button>
    </div>
  );
};

export default TopNotificationBar;
