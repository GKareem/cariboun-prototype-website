import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";

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
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/cariboun-prototype-website" element={<Dashboard />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/create" element={<CreateReport />} />
          <Route path="/reporting/create/form" element={<Form />} />
          <Route path="/sdg" element={<SDG />} />
          <Route path="/sdg/create" element={<CreateSDG />} />
          <Route path="/sdg/create/save" element={<SaveSDG />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/environment/create" element={<CreateEnvironment />} />
        </Routes>
      </HashRouter>
    </div>
  );
}