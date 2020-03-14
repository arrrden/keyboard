import React, { useState } from 'react'
import styled from 'styled-components'

const Counter = ({ title }) => {
  const [noOfKeys, setNoOfKeys] = useState(12)

  return (
    <CounterContainer>
      <div style={{ position: 'relative', gridArea: 'left' }}>
        <TitleContainer>
          <h2 className="counterTitle">&#9652;</h2>
          <h2 className="counterTitle">{title}</h2>
        </TitleContainer>
      </div>
      <ButtonContainer style={{ gridArea: 'right' }}>
        <Button onClick={() => setNoOfKeys(noOfKeys + 1)}>
          <span>&#9650;</span>
        </Button>
        <h2>{noOfKeys}</h2>
        <Button onClick={() => setNoOfKeys(noOfKeys - 1)}>
          <span>&#9660;</span>
        </Button>
      </ButtonContainer>
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
  width: 7rem;
  top: 0;
  left: 0;
  transform-origin: 60% 0%;
  transform: rotate(-270deg) translateX(4.6rem);

  h2 {
    font-size: 1rem;
  }
`

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
`

const Button = styled.button`
  background: none;
  border: none;
  width: 100%;
  display: grid;
  color: #222223;

  span {
    margin: auto;
    line-height: 1;
    padding: 0.4rem 0;
    font-size: 1.4rem;
    text-align: center;
    align-content: center;
  }
`
