import React, { useEffect } from 'react'
import styled from 'styled-components'

// components
import {Key, Controls} from '../index'

// keyboard generation 
import GetKeyTuples from './keyboardGen/keys'

//Oscilloscope
import {audioCtx, analyser} from '../../audioAPI/ctx'
import {draw} from '../../audioAPI/analyser'

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
    oscillator.connect(analyser)
    oscillator.start()
    this.freqMap.set(this.pitch, oscillator)
    draw()
  }

  stopPlaying() {
    const oscillator = this.freqMap.get(this.pitch)
    oscillator?.stop()
    this.freqMap.delete(this.pitch)
  }
}

// Generate array of piano keys on keyboard
const keyArr = (() => {
  const keyArr = GetKeyTuples(20, "A", 4).map(i => i.flat(1))
  const keys = keyArr.map(i => new KEY(...i))
  return keys
})()

// create a key in the DOM
const Keys = () => {
  const divArr = keyArr.map(i => {
    return (
      <span data-key={i.key} key={`key_${i.name}.${i.key}`}>
        <KeyWrapper >
          <Key keyboardKey={i.key} name={i.name} />
        </KeyWrapper>
      </span>
    )
  })
  return <>{divArr}</>
}

const Synth = () => {
  // Listen for events in the DOM
  useEffect(() => {
    let audio
    let eventKey
    window.addEventListener('keypress', e => {
      audio = document.querySelector(`span[data-key="${e.key}"]`)
      eventKey = e.key
      if (!audio) return
      keyArr.find(i => i.key === e.key).startPlaying()
    })
    window.addEventListener('keyup', e => {
      if (e.key !== eventKey) return
      keyArr.find(i => i.key === e.key).stopPlaying()
    })
    return () => {
      window.removeEventListener('keypress')
      window.removeEventListener('keyup')
    }
  }, [])

  return (
    <StyledSynth>
      <LeftPadding />
      <Controls />
      <RightPadding />
      <StyledKeys>
        <div style={{margin: "auto", height: "100%", transform: "translateX(0.6rem)"}}>
        <Keys />
        </div>
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
  grid-template-columns: auto auto auto;
  grid-template-rows: 50% 50%;
  width: 100%;
  height: 400px;
  border-radius: 50px;
  background: linear-gradient(145deg, #d74732, #ff553c);
  box-shadow: 20px 20px 60px #b13a29, 
              -20px -20px 60px #ff6447,
              inset 0 0 2px #ee3f26;
  padding: 1rem;
`

const StyledKeys = styled.div`
  grid-area: keyboard;
  display: grid;
  margin: 0 2rem;
`

const KeyWrapper = styled.li`
  margin:0;
  padding:0;
  height: 100%;
  list-style:none;
  position:relative;
  float:left;
`

const LeftPadding = styled.div`
  grid-area: lPadding;
  height: 100%;
  width: 6rem;
  border-radius: 40px 0 0 40px;
  background-color: rgb(0, 0, 0, 0.1); 
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.1);
`

const RightPadding = styled.div`
  grid-area: rPadding;
  height: 100%;
  width: 6rem;
  border-radius: 0 40px 40px 0;
  background-color: rgb(0, 0, 0, 0.1); 
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.1);
`
