import React, { useState } from 'react';

import { firebaseRef } from '../../../modules/firebase';
import style from './index.module.css';

const CommentForm = ({
    user,
}) => {
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!firebaseRef.comments || !message) {
            return;
        }

        firebaseRef.comments.push({
            text: message,
            userId: user.id,
            timestamp: new Date().getTime(),
        }, (error) => {
            if (error) {
              // The write failed...
            } else {
                setMessage('');
            }
        });
    };

    return (
        <div className={style.commentForm}>
            <form onSubmit={onSubmit}>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Typing Message Here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </div>
    )
};

export default CommentForm;
