import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

export default function Auth() {
    
    const [login, setLogin] = useState(true);
    const [form, setForm] = useState({ username: '', password: '' });

    const dispatch = useDispatch();
    let history = useHistory();

    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = login ? '/login' : '/users';
        const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
        };
        fetch(`https://color-by-nature-api.herokuapp.com/${endpoint}`, config)
        .then(r => r.json())
        .then(user => {
            if (user.error) {
            swal("User not found", "Please try entering your info again", "error");
            return
            }
            dispatch({
            type: 'SET_USER',
            payload: user
            });
            swal("Login Success", `Welcome ${form.username}!`, "success");
            history.push("/mygallery")
        });
    }

    const changeFormButton = () => {
        return login ? (
        <button onClick={() => setLogin(false)}>New here? Sign up</button>
        ) : (
        <button onClick={() => setLogin(true)}>
            Already have an account? Log in
        </button>
        );
    }

    return (
        
        <div className="form-page">
            <h3 class="login-signup-title">{login ? 'Login' : 'Sign Up'}</h3>
            <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                style={{marginBottom: "10px"}}
                className="input"
            />
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="input"
            />
            <input type="submit" id="submit-button" value="Submit"/>
            </form>
                <hr class="form-divider" />
            <div id="change-form-button">
                {changeFormButton()}
            </div>
        </div>
        
    );
}