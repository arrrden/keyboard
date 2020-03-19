import React from 'react'
import styled from 'styled-components'

const Counter = ({ title, children }) => {
  return (
    <CounterContainer>
      <div style={{ position: 'relative', gridArea: 'left' }}>
        <TitleContainer>
          <h2 className="counterTitle">&#9652;</h2>
          <h2 className="counterTitle">{title}</h2>
        </TitleContainer>
      </div>
      <ButtonContainer style={{ gridArea: 'right' }}>{children}</ButtonContainer>
    </CounterContainer>
  )
}

export default Counter

const CounterContainer = styled.div`
  display: grid;
  grid-template-areas: 'left right';
  width: 7rem;
  height: 7rem;
  color: #222223;

  h2 {
    text-align: center;
  }

  div {
    min-width: 3rem;
  }

  .counterTitle {
    text-align: left;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.4rem 0;
  position: absolute;
  width: 7.6rem;
  top: 0;
  left: 0;
  transform-origin: 55% 0%;
  transform: rotate(-270deg) translateX(4.2rem);

  h2 {
    font-size: 1rem;
  }
`

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
`
