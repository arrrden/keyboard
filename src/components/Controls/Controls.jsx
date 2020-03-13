import React, { useState } from 'react'

const Controls = () => {
  const [noOfKeys, setNoOfKeys] = useState(12)

  return (
    <div>
      <button onClick={() => setNoOfKeys(noOfKeys + 1)}>Increment</button>
      <button onClick={() => setNoOfKeys(noOfKeys - 1)}>Decrement</button>
      <h1>{noOfKeys}</h1>
    </div>
  )
}

export default Controls
