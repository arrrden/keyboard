import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button

const StyledButton = styled.div`
  button {
    background: none;
    border: none;
    width: 100%;
    display: grid;
    color: #222223;
  }

  span {
    margin: auto;
    line-height: 1;
    padding: 0.4rem 0;
    font-size: 1.4rem;
    text-align: center;
    align-content: center;
  }
`
