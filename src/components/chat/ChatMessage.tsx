// import React from 'react';
import './ChatMessage.scss';
import { Avatar } from '@mui/material';
import { Messages } from '../../interface';

type Props = {
  messages: Messages;
};

const ChatMessage = (props: Props) => {
  const { timestamp, message, user } = props.messages;
  return (
    <div className="message">
      <Avatar src={user?.photo} />
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">
            {timestamp && String(new Date(timestamp.toDate()).toLocaleString())}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
