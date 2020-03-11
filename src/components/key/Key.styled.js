import styled from 'styled-components'
import React from 'react'

export const StyledKey = ({ children, name }) => {
  const nameLen = name
  return nameLen.length > 1 ? <StyledBlackKey>{children}</StyledBlackKey> : <StyledWhiteKey>{children}</StyledWhiteKey>
}

export const StyledWhiteKey = styled.div`
  width: 100%;
  height: 100%;
  background-color: #efefea;
`

export const StyledBlackKey = styled.div`
  width: 80%;
  height: 70%;
  background-color: #101010;
`
