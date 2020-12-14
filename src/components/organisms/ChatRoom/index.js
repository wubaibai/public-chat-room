import React from 'react';

import MessageList from '../MessageList/index';
import CommentForm from '../CommentForm/index';

const ChatRoom = () => {
    return (
        <div>
            <MessageList />
            <CommentForm />
        </div>
    );
};

export default ChatRoom;
