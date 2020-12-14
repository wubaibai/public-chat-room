import React from 'react';

import Message from '../../molecules/Message/index';
import style from './index.module.css';

const CommentList = ({ comments, users }) => {
    const list = comments.map((comment) => (
        <Message
            key={comment.id}
            name={users[comment.userId].name}
            text={comment.text}
        />
    ));

    return (
        <div className={style.commentList}>{list}</div>
    )
};

export default CommentList;
