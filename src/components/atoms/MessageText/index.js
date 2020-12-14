import React from 'react';
import Linkify from 'react-linkify'

import style from './index.module.css';

const MessageText = ({ text }) => {
    return (
        <Linkify>
            <div className={style.messageText}>{text}</div>
        </Linkify>
    )
};

export default MessageText;
