import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './../styles/messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (() => {
      axios
        .get('/api/messages')
        .then(response => setMessages(response.data))
        .catch(error => console.error(`There was an error retrieving the messages: ${error}`));
    })();
  }, []);

  return (
    <div className='messages'>
      <div className="chat">
        {!messages.length && 'Loading...'}
        {
          messages.map((message, i) => (
            <div className={`${message.mine ? 'mine' : 'theirs'} message-group`} key={i}>
              <div className='message last'>
                {message.body && message.body.split('\n').map((text,key) => (<p key={key}>{text}</p>))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Messages;
