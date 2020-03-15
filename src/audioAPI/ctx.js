// create web audio api context
export const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
export const analyser = audioCtx.createAnalyser()
