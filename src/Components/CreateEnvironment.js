import React from "react";

import "./CreateEnvironment.css";

import PlantImg from "../Images/Env/plant.png";
import MeatImg from "../Images/Env/meat.png";
import SeaFoodImg from "../Images/Env/seafood.png";

export default function CreateEnvironment() {
  return (
    <div id="createENV" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="createNewENV" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">New Assessment</h5>
              <form id="createENVForm">
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="form-label">Where do you live?</label>
                  <label id="inputLabelRegular" class="col-auto col-form-label">Country:</label>
                  <select id="inputField" class="form-select">
                    <option selected>Canada</option>
                  </select>
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabelRegular" class="col-auto col-form-label">Province:</label>
                  <select id="inputField" class="form-select">
                    <option selected>BC</option>
                  </select>
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="col-auto col-form-label">How many staff do you have?</label>
                  <input id="inputField" class="form-control" />
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="col-auto col-form-label">What percentage of staff travel each day?</label>
                  <input id="inputField" class="form-control" />
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="form-label">How many hours does you or your team fly each year?</label>
                  <label id="inputLabel" class="col-auto form-label">0</label>
                  <input id="rangeInput" type="range" class="form-range" min="0" max="1000" step="0.5" />
                  <label id="inputLabel" class="col-auto form-label">1000</label>
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="col-auto form-label">Do you serve food in office? If yes what percentage of foods are plants, seafood or meat?</label>
                  <div class="row">
                    <img id="inputImg" class="col-auto col-img-fluid" src={PlantImg} width="50" height="50" />
                    <input id="inputFieldSmall" class="form-control" />
                    <img id="inputImg" class="col-auto col-img-fluid" src={MeatImg} width="50" height="50" />
                    <input id="inputFieldSmall" class="form-control" />
                    <img id="inputImg" class="col-auto col-img-fluid" src={SeaFoodImg} width="50" height="50" />
                    <input id="inputFieldSmall" class="form-control" />
                  </div>
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="col-auto col-form-label">Do you use cloud services?</label>
                  <label id="inputLabel" class="col-auto col-form-label">Yes</label>
                  <input id="inputRadio" class="form-check-input" type="checkbox" value="" />
                  <label id="inputLabel" class="col-auto col-form-label">No</label>
                  <input id="inputRadio" class="form-check-input" type="checkbox" value="" />
                </div>
                <div id="formENGDiv" class="row">
                  <label id="inputLabel" class="col-auto col-form-label">What cloud services do you use?</label>
                  <select id="inputField" class="form-select">
                    <option selected>AWS</option>
                  </select>
                </div>
                <div style={{ marginBottom: "2%" }} id="formENGDiv" class="row">
                  <label id="inputLabel" class="col-auto col-form-label">What is your average monthly energy bill?</label>
                  <input id="inputField" class="form-control" />
                </div>
              </form>
              <div id="saveButtonDivCenter">
                <button id="saveButton" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#popupModal">Submit</button>
              </div>
              <div class="modal fade" id="popupModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Thanks for Submitting</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
