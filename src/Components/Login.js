import React, { useRef, useState } from "react";

import "./Login.css";

import logo from "../Images/logo.png";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {

    window.location.href = "/cariboun-prototype-website/#/login";

    sessionStorage.setItem("Email:", JSON.stringify(emailRef.current.value));
    sessionStorage.setItem("Password:", JSON.stringify(passwordRef.current.value));

    if (emailRef.current.value !== "cariboun@cariboun.com" || passwordRef.current.value !== "password") {
      setError("Login Failed");
    } else {
      setError("");
    }
  }
  
  return (
    <div id="login" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="largeLogoDiv" class="column">
            <img class="img-fluid" src={logo} />
          </div>
          <div id="loginCard" class="card">
            <div class="card-body">
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2 style={{textAlign: "center"}} id="boldText" class="card-title">Login</h2>
              <form>
                <div id="groups" class="form-group">
                  <label id="text">Email</label>
                  <input style={{marginTop: "1%"}} type="email" class="form-control" ref={emailRef} required/>
                </div>
                <div id="groups" class="form-group">
                  <label id="text">Password</label>
                  <input style={{marginTop: "1%"}} type="Password" class="form-control" ref={passwordRef} required/>
                </div>
                <button id="loginButton" class="btn btn-primary" onClick={() => handleSubmit()}>Log In</button>
              </form>
              <div id="linkDiv">
                <a class="link-primary" onClick={() => { window.location.href = "/cariboun-prototype-website/#/forgot-password" }}>Forgot Password?</a>
              </div>
            </div>
          </div>
          <div id="linkDiv">
            Need an account? <a class="link-primary" onClick={() => { window.location.href = "/cariboun-prototype-website/#/signup" }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
