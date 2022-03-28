import React from "react";

import "./Navbar.css"

import { NavbarData } from "./NavbarData";

import logo from "../Images/logo.png";

export default function Navbar() {
  return (
    <div id="navBar" class="container-fluid">
      <div class="row align-items-start">
        <div id="imgDiv" lass="column">
          <img class="img-fluid" src={logo} width="150" height="150" />
        </div>
        <div id="listDiv" class="column">
          <ul className="list">
          {NavbarData.map((val, key) => {
            return (
              <li className="item" id={window.location.pathname == val.link ? "active" : ""} key={key} onClick={() => {window.location.pathname = val.link}}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}