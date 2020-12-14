import React, { useEffect, useState } from 'react';

import CommentList from '../components/organisms/CommentList/index';
import CommentForm from '../components/organisms/CommentForm/index';
import { init as initFirebase, firebaseRef } from '../modules/firebase';

const ChatRoom = () => {
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: 'Cathy',
            id: '-MOU5gRREq4X8BkWqjU3',
        });
        
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

        return () => {
            firebaseRef.users.off();
            firebaseRef.comments.off();
        };
    }, []);

    return (
        <div>
            <CommentList comments={comments} users={users}/>
            <CommentForm user={user} />
        </div>
    );
};

export default ChatRoom;
