import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect} from "react-router-dom";
import { HashRouter, Switch } from "react-router-dom";
import "./App.css"

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Dashboard from "./Dashboard";
import Reporting from "./Reporting";
import CreateReport from "./CreateReport";
import Form from "./Form";
import SDG from "./SDG";
import CreateSDG from "./CreateSDG";
import SaveSDG from "./SaveSDG";
import Tasks from "./Tasks";
import CreateTask from "./CreateTask";
import Environment from "./Environment";
import CreateEnvironment from "./CreateEnvironment";
import ResultsEnvironment from "./ResultsEnvironment";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
  
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    checkLogin();
  }, [], [loggedIn], [email], [password]);

  function checkLogin() {
    const tempEmail = sessionStorage.getItem("Email:");
    const tempPassword = sessionStorage.getItem("Password:");

    setEmail(tempEmail);
    setPassword(tempPassword);

    if (JSON.parse(tempEmail) === "cariboun@cariboun.com" && JSON.parse(tempPassword) === "password") {
      window.location.href = "/cariboun-prototype-website/#/dashboard";
      setLoggedIn(true);
    } else {
      if (window.location.hash === "#/login") {
        window.location.href = "/cariboun-prototype-website/#/dashboard";
      } else if (window.location.hash === "#/signup") {
        window.location.href = "/cariboun-prototype-website/#/signup";
      } else if (window.location.hash === "#/forgot-password") {
        window.location.href = "/cariboun-prototype-website/#/forgot-password";
      }
      
      setLoggedIn(false);
    }
  }

  function logOut() {
    sessionStorage.setItem("Email:", JSON.stringify(""));
    sessionStorage.setItem("Password:", JSON.stringify(""));

    setLoggedIn(false);
    window.location.href = "/cariboun-prototype-website/#/login";
  }

  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            {loggedIn ? <Redirect to="/dashboard" /> : <Signup />} 
          </Route>
          <Route exact path="/forgot-password">
            {loggedIn ? <Redirect to="/dashboard" /> : <ForgotPassword />}
          </Route>

          
          <Route exact path="/log-out">
            {loggedIn ? logOut : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/dashboard">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <Dashboard />
          </Route>
          <Route exact path="/reporting">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <Reporting />
          </Route>
          <Route exact path="/reporting/create">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <CreateReport />
          </Route>
          <Route exact path="/reporting/create/form">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <Form />
          </Route>
          <Route exact path="/sdg">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <SDG />
          </Route>
          <Route exact path="/sdg/create">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <CreateSDG />
          </Route>
          <Route exact path="/sdg/create/save">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <SaveSDG />
          </Route>
          <Route exact path="/tasks">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <Tasks />
          </Route>
          <Route exact path="/tasks/create">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <CreateTask />
          </Route>
          <Route exact path="/environment">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <Environment />
          </Route>
          <Route exact path="/environment/create">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <CreateEnvironment />
          </Route>
          <Route exact path="/environment/create/results">
            {loggedIn ? "" : <Redirect to="/login" />}
            <Navbar />
            <SearchBar />
            <ResultsEnvironment />
          </Route>
          </Switch>
      </HashRouter>
    </div>
  );
}