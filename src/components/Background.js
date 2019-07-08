
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Background = ({ className }) =>
  <div className={className}>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
  </div>

const animation = keyframes`
  0% {
    transform: translateX(-25%) rotate(0deg);
  }
  100% {
    transform: translateX(25%) rotate(360deg);
  }
`

const StyledBackground = styled(Background)`
  .bg {
    animation: ${animation} 100s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #fafafa 50%, #ffffff 50%);
    bottom: 0;
    left: -50%;
    opacity: .5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }

  .bg2 {
    animation-direction:alternate-reverse;
    animation-duration: 60s;
  }

  .bg3 {
    animation-duration: 120s;
  }
`

export default StyledBackground
