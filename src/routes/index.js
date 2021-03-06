import React, { useEffect, useState } from 'react';

import UserHeader from '../components/organisms/UserHeader/index'
import CommentList from '../components/organisms/CommentList/index';
import CommentForm from '../components/organisms/CommentForm/index';
import LoginForm from '../components/organisms/LoginForm/index';
import { init as initFirebase, firebaseRef } from '../modules/firebase';
import style from './index.module.css';

const ChatRoom = React.memo(() => {
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const storage = window.localStorage;

    const onLogout = () => {
        setUser({});
        storage.removeItem('chat-room:userName');
        storage.removeItem('chat-room:userId');
    };

    useEffect(() => {
        initFirebase();

        /**
         * For Quick Development before localstorage setup
         */
        const userName = storage.getItem('chat-room:userName');
        const userId = storage.getItem('chat-room:userId');
        if (userName && userId) {
            setUser({
                name: userName,
                id: userId,
            });
        }
        setLoading(false);

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

        return () => {
            firebaseRef.users.off();
            firebaseRef.comments.off();
        };
    }, []);

    if (loading) {
        return '';
    }
    
    if (user.name && user.id) {
        return (
            <div className={style.chatroom}>
                <UserHeader user={user} onLogout={onLogout} />
                <div className={style.commentList}>
                    <CommentList comments={comments} users={users}/>
                </div>
                <div className={style.commentForm}>
                    <CommentForm user={user} />
                </div>
            </div>
        )
    }

    if (!user.name || !user.id) {
        return <LoginForm setUser={setUser} />
    }
});

export default ChatRoom;
