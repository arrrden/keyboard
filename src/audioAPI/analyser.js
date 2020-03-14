import { analyser } from './ctx'

const createContext = () => {
  const canvasCtx = document.getElementsByTagName('canvas')[0].getContext('2d')
  return canvasCtx
}

let context

export const draw = (WIDTH, HEIGHT) => {
  requestAnimationFrame(draw) // call itself recursively

  const ctx = createContext() // cavas context
  context = ctx

  const bufferLength = analyser.frequencyBinCount // waveform length
  const dataArray = new Uint8Array(bufferLength) // data
  analyser.getByteTimeDomainData(dataArray)

  const dataPoints = 10 // resolution
  const sliceWidth = (WIDTH * 1.0) / bufferLength // dataPoints

  ctx.clearRect(0, 0, WIDTH, HEIGHT) // clear canvas
  ctx.fillStyle = 'rgb(34, 34, 35)'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
  ctx.lineWidth = 2
  ctx.strokeStyle = 'rgb(255, 253, 174)'

  ctx.beginPath()

  let x = 0
  for (let i = 0; i < bufferLength; i++) {
    // if (i % dataPoints) {
    var v = dataArray[i] / 128.0
    var y = (v * HEIGHT) / 2

    if (i === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
    x += dataPoints
    console.log(x)
    ctx.lineTo(x, HEIGHT / 2)
    ctx.stroke()
    // }
  }

  return ctx
}

export const clear = (WIDTH, HEIGHT) => {
  context.clearRect(0, 0, WIDTH, HEIGHT)
}
