import { randomLocation } from "./Dice.js"
import { getMousePosition, addClick, redraw } from "./Outline.js"

let eventDice
let historyDice
let settlementDice
let paint

const canvas = document.getElementById("worldBuilder")
const beanCanvas = document.getElementById("beanLayer")
canvas.setAttribute("width", "1000")
canvas.setAttribute("height", "600")
beanCanvas.setAttribute("width", "1000")
beanCanvas.setAttribute("height", "600")
const ctx = canvas.getContext("2d")
const ct2 = beanCanvas.getContext("2d")

ctx.lineWidth = 10
ct2.lineWidth = 10

export function diceSetup() {
  let eventDie = document.getElementById("eventDie")
  let historyDie = document.getElementById("historyDie")
  let settlementDie = document.getElementById("settlementDie")

  const start = document.getElementById("startBtn")

  start.addEventListener("click", function () {
    const dieContainer = document.getElementById("dieContainer")
    dieContainer.style.display = "none"
    eventDice = eventDie.value || 10
    historyDice = historyDie.value || 10
    settlementDice = settlementDie.value || 20
    setupGame()
  })
}

export function setupGame() {
  let beans
  let diceShapes = []
  console.log(
    `eventDice: ${eventDice}, historyDice: ${historyDice}, settlement: ${settlementDice}`
  )

  beanCanvas.style.display = "block"
  canvas.style.display = "block"

  beans = Math.floor(Math.random() * (500 - 100) + 100)

  for (let i = 0; i < beans; i++) {
    ct2.beginPath()
    ct2.fillStyle = "#442e26"
    ct2.fillRect(randomLocation(), randomLocation(), 3, 3)
  }

  function randomizeDiceValue(dieMax) {
    return Math.floor(Math.random() * (dieMax - 1) + 1)
  }

  function diceRandomizer(diceType, dieColor, maxDieValue) {
    let maxValue = maxDieValue
    let colorValue = dieColor
    for (let i = 0; i < diceType; i++) {
      let xCoord = randomLocation()
      let yCoord = randomLocation()
      diceShapes.push({
        x: xCoord,
        y: yCoord,
        width: 5,
        height: 5,
        color: colorValue,
      })
      ctx.beginPath()
      ctx.fillStyle = colorValue
      ctx.font = "10px serif"
      ctx.textAlign = "center"
      ctx.fillText(randomizeDiceValue(maxValue), xCoord, yCoord)
      ctx.fillRect(xCoord, yCoord, 5, 5)
    }
  }

  diceRandomizer(settlementDice, "#bd897e", 20)
  diceRandomizer(eventDice, "#f87666", 6)
  diceRandomizer(historyDice, "#885a89", 4)

  var clearBeans = document.getElementById("clearBeans")

  clearBeans.addEventListener("click", function (e) {
    ct2.clearRect(0, 0, 1000, 600)
    //   beanCanvas.style.display = "none"
  })

  //drawing borders
  canvas.addEventListener("mousedown", function (e) {
    var mousePosition = getMousePosition(canvas, e)
    paint = true
    //   redraw(mousePosition.x, mousePosition.y)
  })

  canvas.addEventListener("mousemove", function (e) {
    if (paint) {
      var mousePosition = getMousePosition(canvas, e)
      redraw(mousePosition.x, mousePosition.y)
      // redraw()
    }
  })

  canvas.addEventListener("mouseup", function () {
    paint = false
  })
  canvas.addEventListener("mouseleave", function () {
    paint = false
  })
}

export default {
  eventDice,
  historyDice,
  settlementDice,
  canvas,
  beanCanvas,
  paint,
  ctx,
  ct2,
}
