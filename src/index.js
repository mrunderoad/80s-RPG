import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as mod from './js/state.js';

$(document).ready(function() {
  $("#new-state").click(function() {
    const stateControl = mod.storeState();
    // const addInitialState = mod.initializeState({
    //   "id": (mod.listControl().length),
    //   "dance": 2,
    //   "drip": 5,
    //   "pop": 1,
    //   "fuel": 1,
    //   "tubular": 0
    // });
    const addState = mod.changeListState(stateControl());
    const newList = mod.listControl(addState);
    console.log(addState);
    $("#players-row").append(`
      <div class="col">
      <h3 class="text-center text-danger m-3">Player ${newList.length}</h3>
      <button class="btn-success" id="add-dance-${newList.length}">Dance!</button>
      <button class="btn-success" id="add-drip-${newList.length}">Drip!</button>
      <button class="btn-success" id="add-surge-${newList.length}">Drink a surge!</button>
      <button class="btn-success" id="add-coke-${newList.length}">Drink a Coke!</button>
      <button class="btn-success" id="add-fuel-${newList.length}">Eat some pizza!</button>
      <button class="btn-success" id="add-prince-${newList.length}">Go backstage with Prince!</button>
      <button class="btn-success" id="show-state-${newList.length}">Show State</button>
      <button class="btn-success" id="next-pg">BATTLE!</button>
      <div class="row m-3">
        <div class="col-md-12">
          <div class="card m-a p-3">
            <h4>Player ${newList.length} Stats:</h4>
            <h5><div id="dance-stats-${newList.length}">Dance Lvl: 0</div></h5>
            <h5><div id="drip-stats-${newList.length}">Drip Lvl: 0</div></h5>
            <h5><div id="pop-stats-${newList.length}">Pop Lvl: 0</div></h5>
            <h5><div id="fuel-stats-${newList.length}">Fuel Lvl: 0</div></h5>
            <h5><div id="prince-stats-${newList.length}">Tubular Lvl: 0</div></h5>
          </div>
        </div>
      </div>
    </div>`)
  });  
  //Dynamically add event listeners for multiple states stored in listControl
  $("#new-state").click(function() {
    for (let i = 1; i <= mod.listControl().length; i++) {
      $(`#add-dance-${i}`).click(function() {
        const id = parseInt(this.id.slice(10));
        const stateControl = mod.listControl()[id];
        console.log(stateControl);
        const newState = stateControl(mod.dance);
        console.log(stateControl.dance);
        $(`#dance-stats-${i}`).text(`Dance Lvl: ${newState.dance}`);
        // $(".pic").hide();
      });

      $(`#add-drip-${i}`).click(function() {
        const newState = mod.stateControl(mod.killerOutfit);
        if (newState.drip <= 0){
          $("game-over").show();
          $("#battle-screen").hide();
          $("#stat-page").hide();
        }
        $(`#drip-stats-${i}`).text(`Drip Lvl: ${newState.drip}`);
        $(".pic").hide();
      });

      $(`#add-surge-${i}`).click(function() {
        const newState = mod.stateControl(mod.surge);
        $(`#pop-stats-${i}`).text(`Pop Lvl: ${newState.pop}`);
        $(".pic").hide();
      });

      $(`#add-cola-${i}`).click(function() {
        const newState = mod.stateControl(mod.cola);
        $(`#pop-stats-${i}`).text(`Pop Lvl: ${newState.pop}`);
        $(".pic").hide();
      });

      $(`#add-fuel-${i}`).click(function() {
        const newState = mod.stateControl(mod.pizza);
        $(`#fuel-stats-${i}`).text(`Fuel Lvl: ${newState.fuel}`);
        $(".pic").hide();
      });

      $(`#add-prince-${i}`).click(function() {
        const newState = mod.stateControl(mod.doCokeWithPrince);
        if (newState.tubular >= 2000){
          $(".pic").show();
        }
        $(`#prince-stats-${i}`).text(`Tubular Lvl: ${newState.tubular}`);
      });

      //Added this for dance battle screen
      $("#next-pg").click(function() {
        const newState = mod.stateControl();
        $("#stat-page").hide();
        $("#battle-screen").show();
        $(`#drip-stats-${i}`).text(`Drip Lvl: ${newState.drip}`);
      });
    }
  });

  $("#show-state").click(function() {
    const newState = mod.stateControl();
    $("#dance-stats").text(`Dance Lvl: ${newState.dance}`);
    $('#drip-stats').text(`Drip Lvl: ${newState.drip}`);
    $("#pop-stats").text(`Pop Lvl: ${newState.pop}`);
    $("#fuel-stats").text(`Fuel Lvl: ${newState.fuel}`);
    $("#prince-stats").text(`Tubular Lvl: ${newState.tubular}`);
  });

  

  $("#back-btn").click(function() {
    $("#stat-page").show();
    $("#battle-screen").hide();
  });
});