import React from 'react'
import styled from 'styled-components'

import { Synth } from './components/index'

const StyledHeader = styled.h1`
  color: #ff0000;
`

const App = () => {
  return (
    <>
      <StyledHeader data-testid="app">Beep beep boop</StyledHeader>
      <Synth />
    </>
  )
}

export default App
