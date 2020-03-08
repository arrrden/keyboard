import ReactDOM from 'react-dom'
import React from 'react'

import App from './app.jsx'

ReactDOM.render(<App />, document.getElementById('root'))

// Webpack - Hot Module Replacement
// if (module.hot) {
//   module.hot.accept()
//   module.hot.dispose(() => {
//     console.log('Modules disposed... 💀')
//   })
// }
