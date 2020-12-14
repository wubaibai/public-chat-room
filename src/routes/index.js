import React, { useEffect, useState } from 'react';

import UserHeader from '../components/organisms/UserHeader/index'
import CommentList from '../components/organisms/CommentList/index';
import CommentForm from '../components/organisms/CommentForm/index';
import LoginForm from '../components/organisms/LoginForm/index';
import { init as initFirebase, firebaseRef } from '../modules/firebase';
import style from './index.module.css';

const ChatRoom = () => {
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        initFirebase();

        firebaseRef.users.on('value', (usersSnapshot) => {
            const result = {};
            usersSnapshot.forEach((userSnapshot) => {
                result[userSnapshot.key] = userSnapshot.val();
            });
            setUsers(result);
        });

        firebaseRef.comments.orderByChild('timestamp').on('value', (commentsSnapshot) => {
            const result = [];
            commentsSnapshot.forEach((commentSnapshot) => {
                const commentData = commentSnapshot.val();
                commentData.id = commentSnapshot.key;
                result.push(commentData);
            });
            setComments(result);
        });

        /**
         * For Quick Development before localstorage setup
         */
        setUser({
            name: 'Cathy',
            id: '-MOU5gRREq4X8BkWqjU3',
        });

        return () => {
            firebaseRef.users.off();
            firebaseRef.comments.off();
        };
    }, []);

    if (user.name && user.id) {
        return (
            <div className={style.chatroom}>
                <UserHeader user={user} />
                <div className={style.commentList}>
                    <CommentList comments={comments} users={users}/>
                </div>
                <div className={style.commentForm}>
                    <CommentForm user={user} />
                </div>
            </div>
        )
    } else {
        return <LoginForm setUser={setUser} />
    }
};

export default ChatRoom;
