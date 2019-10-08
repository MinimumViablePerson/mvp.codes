import React from 'react'
import styled from 'styled-components'

import Toggle from './components/Toggle'
import Intro from './components/Intro'
import Icons from './components/Icons'
import Background from './components/Background'

const App = ({ className, darkMode, toggleDarkMode }) => {
  return (
    <div className={className}>
      <div style={{ width: '100%' }}>
        <Toggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <Intro />
      <Icons />
      <Background />
    </div>
  )
}

const StyledApp = styled(App)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  min-height: -webkit-fill-available;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: ${props => props.theme.background.colors.main};
  color: ${props => props.theme.font.colors.main};
`

export default StyledApp
