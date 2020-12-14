import React, { useState } from 'react';

import { firebaseRef } from '../../../modules/firebase';
import style from './index.module.css';

const LoginForm = ({ setUser }) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            return;
        }

        const newUser = firebaseRef.users.push();
        newUser.set({
            name,
        }, (err) => {
            if (err) {
                return;
            }

            setUser({
                name: name,
                id: newUser.key,
            });
        });
    };

    return (
        <div className={style.loginForm}>
            <div>
                <h1 className={style.title}>Welcome to chat room</h1>
                <h3 className={style.subTitle}>Please give your name to join :)</h3>
                <form onSubmit={onSubmit}>
                    <input
                        className={style.input}
                        type="text"
                        value={name}
                        placeholder="What's your name?"
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
};

export default LoginForm;
