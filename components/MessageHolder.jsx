import React from 'react';

const MessageUI = ({ backgroundColor, content ,textColor, alignRight , position}) => {
  return (
    <div className={`p-4 mb-2 mt-2 mr-2 rounded-xl min-w-min max-w-max flex relative ml-2 ${position} ${alignRight ? 'justify-end' : 'justify-start'} ${backgroundColor}`}  >
      <p className={`font-inter font-normal   ${textColor}`} >{content} </p>
    </div>
  );
};

export default MessageUI;