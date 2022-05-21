import React, { useState, useContext } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const { username, password } = loginForm;
  const onchangeLoginForm = event =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  return (
    <div className="auth-inner">
      <h3>Sign In</h3>
      <form>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            required
            name="username"
            value={username}
            onChange={onchangeLoginForm}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            name="password"
            value={password}
            onChange={onchangeLoginForm}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="forget-pasword">Forgot password?</a>
        </p>
        <br />
        <hr width="100%" align="center" />
        <p className="forgot-password text-right">
          Not a member? <a href="sign-up">Sign up now</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
