import React from 'react';

import Avatar from '../../atoms/Avatar/index';
import Name from '../../atoms/Name/index';
import style from './index.module.css';

const UserHeader = React.memo(({
    user,
    onLogout,
}) => {
    return (
        <div className={style.userHeader}>
            <Avatar />
            <Name name={user.name} />
            <button className={style.logoutButton} onClick={onLogout}>Logout</button>
        </div>
    )
});

export default UserHeader;
