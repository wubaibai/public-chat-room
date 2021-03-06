import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDdkgX0E-3X8mkxQ3krNb6J1lwse3dODIw",
    authDomain: "inline-chat-room-code-test.firebaseapp.com",
    databaseURL: "https://inline-chat-room-code-test-default-rtdb.firebaseio.com",
    projectId: "inline-chat-room-code-test",
    storageBucket: "inline-chat-room-code-test.appspot.com",
    messagingSenderId: "663524451356",
    appId: "1:663524451356:web:b804a2937a8cd91e83ebd9",
    measurementId: "G-JRVBKP32JR"
};

export const firebaseRef = {
    comments: null,
    users: null,
};

export const init = () => {
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();
    firebaseRef.comments = database.ref('room/comments');
    firebaseRef.users = database.ref('room/users');
};

export default 'firebase';
