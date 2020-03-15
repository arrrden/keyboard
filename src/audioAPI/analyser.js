import { analyser } from './ctx'

const createContext = () => {
  return {
    ctx: document.getElementsByTagName('canvas')[0].getContext('2d'),
    canvas: document.getElementsByTagName('canvas')[0],
  }
}

const bufferLength = analyser.frequencyBinCount // waveform length
const dataArray = new Uint8Array(bufferLength) // data

export const draw = () => {
  requestAnimationFrame(draw) // call itself recursively

  const { ctx, canvas } = createContext() // canvas context

  analyser.getByteTimeDomainData(dataArray)

  ctx.clearRect(0, 0, canvas.width, canvas.height) // clear canvas
  ctx.fillStyle = 'rgb(34, 34, 35)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.lineWidth = 2
  ctx.strokeStyle = 'rgb(255, 253, 174)'

  ctx.save()
  ctx.moveTo(0, canvas.height / 2)
  ctx.beginPath()

  dataArray.forEach((point, index) => {
    ctx.lineTo(index * (canvas.width / bufferLength), point)
  })

  ctx.stroke()
  // ctx.restore()
}
