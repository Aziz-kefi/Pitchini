import React from 'react';

const MessageUI = ({ backgroundColor, content ,textColor}) => {
  return (
    <div className={`p-4 mb-6 rounded-xl  ${backgroundColor}`}>
      
      <p className={`font-inter font-normal  ${textColor}`}>{content}</p>
    </div>
  );
};

export default MessageUI;