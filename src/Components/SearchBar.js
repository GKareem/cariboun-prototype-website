import React from "react";

import "./SearchBar.css";

import profile_pic from "../Images/profilepic.png";

export default function SearchBar() {
  return (
    <div id="searchBar" class="container-fluid">
      <div class="row align-items-start">
        <div id="searchColumn" class="column">
          <h5 id="searchIcon" class="bi bi-search" />
          <input id="search" class="form-control" type="text" placeholder="Search" aria-label="Search" />
          <img id="profilePic" class="img-fluid" src={profile_pic} width="50" height="50" />
        </div>
      </div>
    </div>
  )
}
