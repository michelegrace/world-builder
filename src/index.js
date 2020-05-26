"use strict"

import { eventDice, historyDice, settlementDice, diceSetup } from "./Setup.js"
// import { releaseTheBeans } from "./Beans.js"
;(function () {
  let eventDice
  let historyDice
  let settlementDice

  function init() {
    diceSetup()
  }

  document.addEventListener("DOMContentLoaded", init)
})()

//  Initiate Game

// Game Setup
// select dice
// toss beans and dice randomly
