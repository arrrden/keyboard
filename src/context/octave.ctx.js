import React, { createContext, useContext, useReducer } from 'react'
const OctaveNumberStateContext = createContext()
const OctaveNumberDispatchContext = createContext()

// TODO: just use state this is ott
function octaveReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      if (state.octave !== 8) {
        return { octave: state.octave + 1 }
      } else {
        return { octave: 8 }
      }
    }
    case 'decrement': {
      if (state.octave !== 0) {
        return { octave: state.octave - 1 }
      } else {
        return { octave: 0 }
      }
    }
    default: {
      throw new Error(`unhandled action type: ${action.type}`)
    }
  }
}

function OctaveProvider({ children }) {
  const [state, dispatch] = useReducer(octaveReducer, { octave: 4 })
  return (
    <OctaveNumberStateContext.Provider value={state}>
      <OctaveNumberDispatchContext.Provider value={dispatch}>{children}</OctaveNumberDispatchContext.Provider>
    </OctaveNumberStateContext.Provider>
  )
}

const useOctaveState = () => {
  const ctx = useContext(OctaveNumberStateContext)
  if (!ctx) throw new Error('useOctaveState must be used within an OctaveProvider')
  return ctx
}

const useOctaveDispatch = () => {
  const ctx = useContext(OctaveNumberDispatchContext)
  if (!ctx) throw new Error('useOctaveDispatch must be used within an OctaveProvider')
  return ctx
}
export { OctaveProvider, useOctaveState, useOctaveDispatch }
