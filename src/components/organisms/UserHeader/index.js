import React from 'react';

import Avatar from '../../atoms/Avatar/index';
import MessageText from '../../atoms/MessageText/index';
import Name from '../../atoms/Name/index';
import style from './index.module.css';

const UserHeader = React.memo(({
    user,
}) => {
    return (
        <div className={style.userHeader}>
            <Avatar />
            <Name name={user.name} />
            <button className={style.logoutButton}>Logout</button>
        </div>
    )
});

export default UserHeader;
