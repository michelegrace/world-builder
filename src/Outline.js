//pass ctx and canvas
import { ctx } from "./Setup.js"

export function getMousePosition(canvas, event) {
  const canvasContainer = canvas.getBoundingClientRect()

  return {
    x: event.clientX - canvasContainer.left,
    y: event.clientY - canvasContainer.top,
  }
}

let clickX = new Array()
let clickY = new Array()
let clickDrag = new Array()

export function addClick(x, y, dragging) {
  clickX.push(x)
  clickY.push(y)
  clickDrag.push(dragging)
}

export function redraw(x, y) {
  console.log(x, y)
  //   ctx.strokeStyle = "#df4b26"
  //   ctx.lineJoin = "round"
  //   ctx.lineWidth = 3

  //get redraw to actually DRAW
}
