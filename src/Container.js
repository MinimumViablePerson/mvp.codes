import React from 'react'

import App from './App'
import { ThemeProvider } from 'styled-components'
import themes from './themes'

import useToggle from './hooks/useToggle'

const lightOrDark = darkMode => themes =>
  darkMode ? themes.dark : themes.light

const Container = () => {
  const [darkMode, toggleDarkMode] = useToggle()
  const theme = lightOrDark(darkMode)(themes)
  return (
    <ThemeProvider theme={theme}>
      <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  )
}

export default Container
