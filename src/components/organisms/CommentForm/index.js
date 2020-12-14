import React from 'react';

import style from './index.module.css';

const CommentForm = () => {
    return (
        <div className={style.commentForm}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className={style.input} type="text" placeholder="Typing Message Here" />
            </form>
        </div>
    )
};

export default CommentForm;
