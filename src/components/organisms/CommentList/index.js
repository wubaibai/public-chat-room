import React, { useEffect, useRef } from 'react';

import Message from '../../molecules/Message/index';
import style from './index.module.css';

const ListEnd = () => {
    const listEndRef = useRef();

    useEffect(() => {
        listEndRef.current.scrollIntoView();
    });

    return (
        <div ref={listEndRef} />
    );
};

const CommentList = ({ comments, users }) => {
    const list = comments.map((comment) => (
        <Message
            key={comment.id}
            name={users[comment.userId] ? users[comment.userId].name : '**Deleted User**' }
            text={comment.text}
        />
    ));

    return (
        <div className={style.commentList}>
            {list}
            <ListEnd />
        </div>
    );
};

export default CommentList;
