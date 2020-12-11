import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId } = render(<Login />)
    // Error Status should be disabled at first
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    // Submit button should be disabled at first
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    // Email and Password status should be with a normal message
    const emailStatus = getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo Obrigatório')
    expect(emailStatus.textContent).toBe('&#8226;')
    const passwordStatus = getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo Obrigatório')
    expect(passwordStatus.textContent).toBe('&#8226;')
  })
})
