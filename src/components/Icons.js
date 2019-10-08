import React from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as LinkedIn } from '../images/linkedin.svg'
import { ReactComponent as Medium } from '../images/medium.svg'
import { ReactComponent as Github } from '../images/github.svg'

const fadeIn = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const Icons = ({ className = '' }) => (
  <div className={className}>
    <a
      id='twitter'
      title='Twitter'
      rel='noopener noreferrer'
      target='_blank'
      href='https://twitter.com/NicolasMarcora'
    >
      <Twitter />
    </a>
    <a
      id='linkedin'
      title='LinkedIn'
      rel='noopener noreferrer'
      target='_blank'
      href='https://www.linkedin.com/in/nmarcora/'
    >
      <LinkedIn />
    </a>
    <a
      id='medium'
      title='Medium'
      rel='noopener noreferrer'
      target='_blank'
      href='https://medium.com/@nicolasmarcora'
    >
      <Medium />
    </a>
    <a
      id='github'
      title='Github'
      rel='noopener noreferrer'
      target='_blank'
      href='https://github.com/MinimumViablePerson'
    >
      <Github />
    </a>
  </div>
)

const StyledIcons = styled(Icons)`
  width: 100%;
  text-align: center;

  svg {
    width: 60px;
    height: 60px;
    margin: 0 10px;
    animation: 1s ${fadeIn};
    transition: 300ms ease-in-out;
    fill: ${props => props.theme.font.colors.main};

    &:hover {
      transform: rotate(-8deg);
    }
  }

  #twitter svg:hover {
    fill: #1d9deb;
  }

  #linkedin svg:hover {
    fill: #0272af;
  }

  #medium svg:hover {
    fill: #00d060;
  }

  #github svg:hover {
    fill: #9d219c;
  }
`

export default StyledIcons
