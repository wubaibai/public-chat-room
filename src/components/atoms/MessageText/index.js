import React from 'react';

import style from './index.module.css';

const MessageText = ({ text }) => {
    return (
        <div className={style.messageText}>{text}</div>
    )
};

export default MessageText;
