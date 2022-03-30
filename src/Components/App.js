import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  
export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <SearchBar />
            <Dashboard />
          </Route>
          <Route exact path="/dashboard">
            <Navbar />
            <SearchBar />
            <Dashboard />
          </Route>
          <Route exact path="/reporting">
            <Navbar />
            <SearchBar />
            <Reporting />
          </Route>
          <Route exact path="/reporting/create">
            <Navbar />
            <SearchBar />
            <CreateReport />
          </Route>
          <Route exact path="/reporting/create/form">
            <Navbar />
            <SearchBar />
            <Form />
          </Route>
          <Route exact path="/sdg">
            <Navbar />
            <SearchBar />
            <SDG />
          </Route>
          <Route exact path="/sdg/create">
            <Navbar />
            <SearchBar />
            <CreateSDG />
          </Route>
          <Route exact path="/sdg/create/save">
            <Navbar />
            <SearchBar />
            <SaveSDG />
          </Route>
          <Route exact path="/tasks">
            <Navbar />
            <SearchBar />
            <Tasks />
          </Route>
          <Route exact path="/tasks/create">
            <Navbar />
            <SearchBar />
            <CreateTask />
          </Route>
          <Route exact path="/environment">
            <Navbar />
            <SearchBar />
            <Environment />
          </Route>
          <Route exact path="/environment/create">
            <Navbar />
            <SearchBar />
            <CreateEnvironment />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}