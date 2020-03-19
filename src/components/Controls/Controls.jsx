import React from 'react'
import styled from 'styled-components'

import Counter from './children/Counter.jsx'
import Button from './children/Button.jsx'

import { useKeyState, useKeyDispatch } from '../../context/keys.ctx'
import { useOctaveState, useOctaveDispatch } from '../../context/octave.ctx'

const Controls = () => {
  const { keys } = useKeyState()
  const { octave } = useOctaveState()
  const keyDispatch = useKeyDispatch()
  const octaveDispatch = useOctaveDispatch()

  return (
    <ControlsContainer>
      <Visualiser>
        <div style={{ margin: 'auto' }}>
          <canvas height="90px" width="290px" />
        </div>
      </Visualiser>
      <Counter title="keys / octave">
        <Button>
          <button onClick={() => keyDispatch({ type: 'increment' })}>
            <span>&#9650;</span>
          </button>
        </Button>
        <h2>{keys}</h2>
        <Button>
          <button onClick={() => keyDispatch({ type: 'decrement' })}>
            <span>&#9660;</span>
          </button>
        </Button>
      </Counter>
      <Counter title="octave no.">
        <Button>
          <button onClick={() => octaveDispatch({ type: 'increment' })}>
            <span>&#9650;</span>
          </button>
        </Button>
        <h2>{octave}</h2>
        <Button>
          <button onClick={() => octaveDispatch({ type: 'decrement' })}>
            <span>&#9660;</span>
          </button>
        </Button>
      </Counter>
    </ControlsContainer>
  )
}

export default Controls

const ControlsContainer = styled.div`
  padding: 2rem 1.4rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Visualiser = styled.div`
  height: 7rem;
  width: 300px;
  border-radius: 3px;
  background: #222223;
  display: flex;
  justify-content: space-evenly;
  box-shadow: inset 5px 5px 19px #1e1e1f, inset -5px -5px 19px #262627;
`
