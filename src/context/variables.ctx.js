import React, { createContext, useReducer } from 'react'
const OctaveNumberStateContext = createContext()
const OctaveNumberDispatchContext = createContext()

function variableReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      return { count: state.count - 1 }
    }
    default: {
      throw new Error(`unhandled action type: ${action.type}`)
    }
  }
}

function VariableProvider({ children }) {
  const [state, dispatch] = useReducer(variableReducer, { count: 0 })
  return (
    <OctaveNumberStateContext value={state}>
      <OctaveNumberDispatchContext value={dispatch}>{children}</OctaveNumberDispatchContext>
    </OctaveNumberStateContext>
  )
}

export { VariableProvider }
