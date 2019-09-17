import React from 'react'
import styled from 'styled-components'

import Intro from './components/Intro'
import Icons from './components/Icons'
import Background from './components/Background'

const App = ({ className }) => (
  <div className={className}>
    <div style={{ width: '100%' }} />
    <Intro />
    <Icons />
    <Background />
  </div>
)

const StyledApp = styled(App)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  min-height: -webkit-fill-available;
`

export default StyledApp
