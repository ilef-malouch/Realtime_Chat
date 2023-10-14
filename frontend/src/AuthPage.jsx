import React from 'react';
import axios from 'axios';
import { URL } from '../CONSTANTS';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target[0]
        console.log(value);
        axios.post(
            URL+'/authenticate',
            {username: value}
        )
        .then(r => props.onAuth({ ...r.data, secret: value }))
        .catch(e => console.log('error ', e))
        
    };
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome &#128512;</div>
                <div className="form-subtitle">Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">Enter</button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
