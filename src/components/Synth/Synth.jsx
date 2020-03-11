import React, { useEffect } from 'react'
import styled from 'styled-components'

// components
import {Key} from '../index'

// keyboard generation 
import GetKeyTuples from './keyboardGen/keys'

// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

// describe a new oscillator for any given key
class KEY {
  constructor(freq, name, key) {
    this.name = name
    this.key = key
    this.pitch = freq
    this.freqMap = new Map()
  }

  startPlaying() {
    if (this.freqMap.has(this.pitch)) return
    const oscillator = audioCtx.createOscillator() // oscillator instance
    oscillator.frequency.setValueAtTime(this.pitch, audioCtx.currentTime)
    oscillator.connect(audioCtx.destination)
    oscillator.start()
    this.freqMap.set(this.pitch, oscillator)
  }

  stopPlaying() {
    const oscillator = this.freqMap.get(this.pitch)
    oscillator?.stop()
    this.freqMap.delete(this.pitch)
  }
}

const generateKeys = () => {
  const keyArr = GetKeyTuples(20, "A", 4).map(i => i.flat(1))
  const keys = keyArr.map(i => new KEY(...i))
  return keys
}

const keyArr = generateKeys()

// create a key in the DOM
const Keys = () => {
  const divArr = keyArr.map(i => {
    return (
      <div data-key={i.key} key={`key_${i.name}.${i.key}`}>
        <Key keyboardKey={i.key} name={i.name} />
      </div>
    )
  })
  console.log(divArr)
  return <>{divArr}</>
}

const Synth = () => {
  // Listen for events in the DOM
  useEffect(() => {
    let audio
    let eventKey
    window.addEventListener('keydown', e => {
      audio = document.querySelector(`div[data-key="${e.key}"]`)
      eventKey = e.key
      if (!audio) return
      keyArr.find(i => i.key === e.key).startPlaying()
    })
    window.addEventListener('keyup', e => {
      if (e.key !== eventKey) return
      keyArr.find(i => i.key === e.key).stopPlaying()
    })
    return () => {
      window.removeEventListener('keydown')
      window.removeEventListener('keyup')
    }
  }, [])

  return (
    <StyledSynth>
      <div>LEFT PADDING</div>
      <div>CONTROLS</div>
      <div>RIGHT PADDING</div>
      <StyledKeys>
        <Keys />
      </StyledKeys>
    </StyledSynth>
  )
}

export default Synth

// Styling
const StyledSynth = styled.div`
  display: grid;
  grid-template-areas:
    'lPadding controls rPadding'
    'lPadding keyboard rPadding';
  grid-template-columns: auto 80% auto;
  width: 100%;
  min-height: 600px;
  background-color: #232222;
`

const StyledKeys = styled.div`
  grid-area: keyboard;
  display: flex;
  justify-content: space-evenly;
  width: 100%
`
