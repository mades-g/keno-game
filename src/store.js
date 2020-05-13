import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { uiMdlw } from './redux/middleware/ui'
import { uiReducer } from './redux/reducers/ui'

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

export const store = createStore(
  uiReducer,
  composeEnhancers(
    applyMiddleware(...uiMdlw)
  )
)
