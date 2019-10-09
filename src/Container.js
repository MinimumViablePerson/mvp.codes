import React from 'react'

import App from './App'
import { ThemeProvider } from 'styled-components'
import themes from './themes'

import useDarkMode from './hooks/useDarkMode'

const lightOrDark = darkMode => themes =>
  darkMode ? themes.dark : themes.light

const Container = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const toggleDarkMode = () => setDarkMode(!darkMode)

  const theme = lightOrDark(darkMode)(themes)
  return (
    <ThemeProvider theme={theme}>
      <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  )
}

export default Container
