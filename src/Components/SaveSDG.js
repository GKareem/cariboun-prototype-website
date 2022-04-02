import React, { useEffect, useState, useCallback } from "react";

import "./CreateSDG.css";

let SDGImg = [];

export default function CreateSDG() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [imgInfo, setImgInfo] = useState([]);

  let selectedSDGImg = [];

  useEffect(() => {
    getImgData();
  });

  function getImgData(){
    const imgData = localStorage.getItem("ImgInfo");
    if (imgData) {
      SDGImg = JSON.parse(imgData);
    }
  }

  function selectedImg(){
    for (let i = 0; i < SDGImg.length; i++){
      if (SDGImg[i].selected) {
        selectedSDGImg.push({ value: i, selected: true});
      }
    }
    console.log(selectedSDGImg)
  }

  return (
    getImgData(),
    selectedImg(),
    <div id="createSDG" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="selectingSDG" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title" style={{textAlign: "center"}}>New SDG Assignment</h5>
              <h5 id="text" class="card-title" style={{textAlign: "left", marginTop: "3%"}}>Choose the sustainable development goals that are relevant to your company:</h5>
              <div id="selectingImgGrid">
                {selectedSDGImg.map((data) => {
                  return (
                    <img class="img-fluid" id="arrayImg" style={{ opacity: 1}} key={data.value} src={require("../Images/SDG/SDG_" + (data.value + 1) + ".png")} width="75" height="75" />
                  );
                  })}
              </div>
              <div id="saveButtonDiv">
                <button id="saveButton" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#popupModal">Save</button>
              </div>
              <div class="modal fade" id="popupModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Saved</h5>
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
