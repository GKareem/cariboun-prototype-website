import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Router>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/cariboun-prototype-website" element={<Dashboard />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/cariboun-prototype-website/dashboard" element={<Dashboard />} />
          <Route path="/cariboun-prototype-website/Reporting" element={<Reporting />} />
          <Route path="/cariboun-prototype-website/reporting/create" element={<CreateReport />} />
          <Route path="/cariboun-prototype-website/reporting/create/form" element={<Form />} />
          <Route path="/cariboun-prototype-website/sdg" element={<SDG />} />
          <Route path="/cariboun-prototype-website/sdg/create" element={<CreateSDG />} />
          <Route path="/cariboun-prototype-website/sdg/create/save" element={<SaveSDG />} />
          <Route path="/cariboun-prototype-website/tasks" element={<Tasks />} />
          <Route path="/cariboun-prototype-website/tasks/create" element={<CreateTask />} />
          <Route path="/cariboun-prototype-website/environment" element={<Environment />} />
          <Route path="/cariboun-prototype-website/environment/create" element={<CreateEnvironment />} />
        </Routes>
      </Router>
    </div>
  );
}