import styled from 'styled-components'
import React from 'react'

// eslint-disable-next-line react/prop-types
export const StyledKey = ({ children, name }) => {
  const nameLen = name
  return nameLen.length < 2 ? (
    nameLen.match(/[ABDEG]/g) ? (
      <StyledWhiteKeyMargin>{children}</StyledWhiteKeyMargin>
    ) : (
      <StyledWhiteKey>{children}</StyledWhiteKey>
    )
  ) : (
    <StyledBlackKey>{children}</StyledBlackKey>
  )
}

export const StyledWhiteKeyMargin = styled.div`
  width: 3rem;
  height: 100%;
  background-color: #efefea;
  margin: 0 0 0 -1.85em;
  z-index: 6;
  display: grid;
  box-shadow: inset 0 0 2px #838386;
  border-radius: 0 0 3px 3px;
  font-size: 70%;

  div {
    margin: auto auto 0 auto;
    padding: 0.3rem;
  }
`
export const StyledWhiteKey = styled.div`
  width: 3rem;
  height: 100%;
  background-color: #efefea;
  z-index: 6;
  display: grid;
  box-shadow: inset 0 0 2px #838386;
  border-radius: 0 0 3px 3px;
  font-size: 70%;

  div {
    margin: auto auto 0 auto;
    padding: 0.3rem;
  }
`

export const StyledBlackKey = styled.div`
  width: 2rem;
  height: 70%;
  background-color: #101010;
  margin: 0 0 0 -1.4em;
  z-index: 7;
  position: relative;
  display: grid;
  box-shadow: inset 0 0 2px #838386;
  border-radius: 0 0 3px 3px;
  font-size: 70%;

  div {
    color: white;
    margin: auto auto 0 auto;
    padding: 0.3rem;
  }
`
