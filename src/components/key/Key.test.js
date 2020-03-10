/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './app.jsx'

test('it renders the app', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('app')).toBeInTheDocument()
})
