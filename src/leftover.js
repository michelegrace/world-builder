let eventDice
let historyDice
let settlementDice
let diceShapes = []

function randomizeDiceValue(dieMax) {
  //dice max might be 4, 6, or 20
  return Math.floor(Math.random() * (dieMax - 1) + 1)
}

function diceRandomizer(diceType, dieColor, maxDieValue) {
  let maxValue = maxDieValue
  let colorValue = dieColor
  for (let i = 0; i < diceType; i++) {
    let xCoord = locationRandomizer()
    let yCoord = locationRandomizer()
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
