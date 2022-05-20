import React, { Component } from 'react';
import './style.css';

export default class ForgetPassword extends Component {
  render() {
    return (
      <div class="auth-inner">
        <h3>
          <i class="fa fa-lock fa-4x"></i>
        </h3>
        <h3 class="text-center">Forgot Password?</h3>
        <h4>You can reset your password here.</h4>
        <div class="panel-body">
          <form class="form">
            <fieldset>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-envelope color-blue"></i>
                  </span>

                  <input
                    id="emailInput"
                    placeholder="email address"
                    class="form-control"
                    type="email"
                    oninvalid="setCustomValidity('Please enter a valid email address!')"
                    onchange="try{setCustomValidity('')}catch(e){}"
                    required=""
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  class="btn btn-lg btn-primary btn-block"
                  value="Send My Password"
                  type="submit"
                  id="btn-submit"
                />
              </div>

              <p className="forgot-password text-right">
                <a href="sign-in">Return to sign-in?</a>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
