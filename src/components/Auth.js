import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function Auth() {
  const {user} = useSelector(state => state.auth);
  
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState({ username: '', password: '' });

  const dispatch = useDispatch();
  let history = useHistory();

  
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const endpoint = login ? '/login' : '/users';
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };
    fetch(`http://localhost:3000/${endpoint}`, config)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: 'SET_USER',
          payload: data
        });
        history.push("/mygallery")
      });
  }

  function changeFormButton() {
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
      <h1>{login ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
      {changeFormButton()}
    </div>
  );
}