import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as LinkedIn } from '../images/linkedin.svg'
import { ReactComponent as Medium } from '../images/medium.svg'

const Icons = ({ className }) =>
  <div className={className}>
    <a rel="noopener noreferrer" target='_blank' href='https://twitter.com/NicolasMarcora'><Twitter /></a>
    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/nmarcora/'><LinkedIn /></a>
    <a rel="noopener noreferrer" target='_blank' href='https://medium.com/@nicolasmarcora'><Medium /></a>
  </div>

const StyledIcons = styled(Icons)`
  width: 100%;
  text-align: center;

  svg {
    width: 60px;
    height: 60px;
    margin: 0 10px;
    transition: 700ms ease-in-out;

    &:hover {
      fill: rgba(29,161,242);
      transform: rotate(360deg);
    }
  }
`

export default StyledIcons
