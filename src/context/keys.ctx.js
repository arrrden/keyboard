import React, { createContext, useContext, useReducer } from 'react'
const KeyNumberStateContext = createContext()
const KeyNumberDispatchContext = createContext()

// TODO: just use state this is ott
function keyReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      if (state.keys < 20) {
        return { keys: state.keys + 1 }
      } else {
        return { keys: 20 }
      }
    }
    case 'decrement': {
      if (state.keys > 1) {
        return { keys: state.keys - 1 }
      } else {
        return { keys: 1 }
      }
    }
    default: {
      throw new Error(`unhandled action type: ${action.type}`)
    }
  }
}

function KeyProvider({ children }) {
  const [state, dispatch] = useReducer(keyReducer, { keys: 12 })
  return (
    <KeyNumberStateContext.Provider value={state}>
      <KeyNumberDispatchContext.Provider value={dispatch}>{children}</KeyNumberDispatchContext.Provider>
    </KeyNumberStateContext.Provider>
  )
}

const useKeyState = () => {
  const ctx = useContext(KeyNumberStateContext)
  if (!ctx) throw new Error('useKeyState must be used within an KeyProvider')
  return ctx
}

const useKeyDispatch = () => {
  const ctx = useContext(KeyNumberDispatchContext)
  if (!ctx) throw new Error('useKeyDispatch must be used within an KeyProvider')
  return ctx
}

export { KeyProvider, useKeyState, useKeyDispatch }
