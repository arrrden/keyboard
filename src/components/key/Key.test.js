/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Key from './Key.jsx'

test('it renders the app', () => {
  const { getByText } = render(<Key name="A" keyboardKey="q" />)
  expect(getByText('q/A')).toBeInTheDocument()
})
