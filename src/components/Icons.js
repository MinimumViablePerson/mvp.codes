import React from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as LinkedIn } from '../images/linkedin.svg'
import { ReactComponent as Medium } from '../images/medium.svg'

const animation = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const Icons = ({ className }) =>
  <div className={className}>
    <a title='Twitter' rel="noopener noreferrer" target='_blank' href='https://twitter.com/NicolasMarcora'><Twitter /></a>
    <a title='LinkedIn' rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/nmarcora/'><LinkedIn /></a>
    <a title='Medium' rel="noopener noreferrer" target='_blank' href='https://medium.com/@nicolasmarcora'><Medium /></a>
  </div>

const StyledIcons = styled(Icons)`
  width: 100%;
  text-align: center;

  svg {
    width: 60px;
    height: 60px;
    margin: 0 10px;
    animation: 1s ${animation};
    transition: 700ms ease-in-out;

    &:hover {
      fill: rgba(9,141,222);
      transform: rotate(360deg);
    }
  }
`

export default StyledIcons
