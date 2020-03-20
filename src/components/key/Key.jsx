import React from 'react'
import styled from 'styled-components'

import { StyledKey } from './Key.styled'

// eslint-disable-next-line react/prop-types
const Key = ({ keyboardKey, name }) => {
  return (
    <StyledKey name={name}>
      <div id={keyboardKey} style={{ width: '100%', textAlign: 'center' }}>
        {keyboardKey}/{name}
      </div>
    </StyledKey>
  )
}

export default Key
