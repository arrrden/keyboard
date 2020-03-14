import React from 'react'
import styled from 'styled-components'

import Counter from './children/Counter.jsx'

const Controls = () => {
  return (
    <ControlsContainer>
      <Visualiser />
      <Counter title="number of keys" />
      <Counter title="octave" />
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
  box-shadow: inset 5px 5px 19px #1e1e1f, inset -5px -5px 19px #262627;
`
