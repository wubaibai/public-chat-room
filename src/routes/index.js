import React, { useEffect, useState } from 'react';

import CommentList from '../components/organisms/CommentList/index';
import CommentForm from '../components/organisms/CommentForm/index';
import { init as initFirebase } from '../modules/firebase';

const ChatRoom = () => {
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        const { commentsRef, usersRef } = initFirebase();
        commentsRef.orderByChild('timestamp').once('value', (commentsSnapshot) => {
            const result = [];
            commentsSnapshot.forEach((commentSnapshot) => {
                const commentData = commentSnapshot.val();
                commentData.id = commentSnapshot.key;
                result.push(commentData);
            });
            setComments(result);
        });

        usersRef.once('value', (usersSnapshot) => {
            const result = {};
            usersSnapshot.forEach((userSnapshot) => {
                result[userSnapshot.key] = userSnapshot.val();
            });
            setUsers(result);
        });
    }, []);

    return (
        <div>
            <CommentList comments={comments} users={users}/>
            <CommentForm />
        </div>
    );
};

export default ChatRoom;
