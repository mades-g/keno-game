import React from 'react'
import { Provider } from 'react-redux'
import { createUseStyles } from 'react-jss'

import { store } from './store'
import Keno from './components/Keno'

export const mainColor = '#1E2532'

// global style
const useStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: mainColor
    }
  }
})

function App () {
  useStyles()

  return (
    <Provider store={store}>
      <Keno />
    </Provider>
  )
};

export default App
