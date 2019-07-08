import React from 'react'
import styled from 'styled-components'

import Intro from './components/Intro'
import Icons from './components/Icons'

const App = ({ className }) =>
  <div className={className}>
    <div style={{ width: '100%'}}></div>
    <Intro />
    <Icons />
  </div>

const StyledApp = styled(App)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  min-height: -webkit-fill-available;
`

export default StyledApp
