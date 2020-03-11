import React from 'react'

import { StyledKey } from './Key.styled'

// eslint-disable-next-line react/prop-types
const Key = ({ keyboardKey, name }) => {
  return (
    <StyledKey name={name}>
      <span>
        {keyboardKey}/{name}
      </span>
    </StyledKey>
  )
}

export default Key
