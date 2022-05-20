import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
  render() {
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
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
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
        </form>
      </div>
    );
  }
}
