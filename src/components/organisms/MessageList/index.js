import React from 'react';

import Message from '../../molecules/Message/index';
import style from './index.module.css';

const MessageList = () => {
    return (
        <div className={style.messageList}>
            <Message />
            <Message />
            <Message />
        </div>
    )
};

export default MessageList;
