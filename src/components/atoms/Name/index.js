import React from 'react';

import style from './index.module.css';

const UserName = ({ name }) => {
    return (
        <div className={style.username}>{name}</div>
    )
};

export default UserName;
