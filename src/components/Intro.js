import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const Intro = ({ className }) =>
  <div className={className}>
    <h1>I'm <span>Nicolas Marcora</span>.</h1>
    <h2>Also known as <span>MinimumViablePerson</span>.</h2>
  </div>

const StyledIntro = styled(Intro)`
  width: 100%;
  text-align: center;
  h1 {
    font-size: 3rem;
  }

  animation: 1s ${animation} ease-out;

  span {
    color: rgba(29,161,242,1.00);
    font-weight: 600;
  }
`

export default StyledIntro
