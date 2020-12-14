import React from 'react';

import Avatar from '../../atoms/Avatar/index';
import MessageText from '../../atoms/MessageText/index';
import Name from '../../atoms/Name/index';
import style from './index.module.css';

const Message = ({
    name,
    text,
}) => {
    return (
        <div className={style.message}>
            <div className={style.avatar}>
                <Avatar />
            </div>
            <div className={style.info}>
                <Name name={name} />
                <MessageText text={text} />
            </div>
        </div>
    )
};

export default Message;
