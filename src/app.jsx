import React from 'react'
import { ThemeProvider } from 'styled-components'

// styling
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/global'

// components
import { Synth } from './components/index'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Synth />
    </ThemeProvider>
  )
}

export default App
