import React from 'react'
import Router from './containers/Router'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
