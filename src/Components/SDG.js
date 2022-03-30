import React from "react";

import "./SDG.css";

import SDG_7 from "../Images/SDG/SDG_7.png";
import SDG_9 from "../Images/SDG/SDG_9.png";
import SDG_11 from "../Images/SDG/SDG_11.png";
import SDG_13 from "../Images/SDG/SDG_13.png";
import SDG_1 from "../Images/SDG/SDG_1.png";
import SDG_2 from "../Images/SDG/SDG_2.png";
import SDG_5 from "../Images/SDG/SDG_5.png";

export default function SDG() {
  return (
    <div id="sdg" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <h3 id="boldText" className="SDGTitle">SDG</h3>
          <button id="newSDGButton" type="button" class="btn btn-lg" onClick={() => { window.location.href = "/cariboun-prototype-website/#/sdg/create" }}><h1 class="bi bi-file-earmark-plus-fill" /><h6>New SDG <h6>Assignment</h6></h6></button>
        </div>
        <div class="column">
          <div id="sdgSummary" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">SDG Summary</h5>
              <h6 id="subHeading">Primary Goal Targets</h6>
              <div id="imgGrid">
                <img class="img-fluid" src={SDG_7} width="75" height="75" />
                <img class="img-fluid" src={SDG_9} width="75" height="75" />
                <img class="img-fluid" src={SDG_11} width="75" height="75" />
                <img class="img-fluid" src={SDG_13} width="75" height="75" />
              </div>
              <h6 id="subHeading">Secondary Goal Targets</h6>
              <div id="imgGrid">
                <img id="secImg" class="img-fluid" src={SDG_1} width="75" height="75" />
                <img id="secImg" class="img-fluid" src={SDG_2} width="75" height="75" />
                <img id="secImg" class="img-fluid" src={SDG_5} width="75" height="75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
