import React from 'react'
import { ThemeProvider } from 'styled-components'

// context
import { KeyProvider } from './context/keys.ctx'
import { OctaveProvider } from './context/octave.ctx'

// styling
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/global'

// components
import { Synth } from './components/index'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <KeyProvider>
        <OctaveProvider>
          <GlobalStyles />
          <Synth />
        </OctaveProvider>
      </KeyProvider>
    </ThemeProvider>
  )
}

export default App
