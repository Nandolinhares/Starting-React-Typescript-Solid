import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import Signup from './signup'
import { Helper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <Signup />
  )
  return {
    sut
  }
}

describe('Signup Component', () => {
  test('Should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()
    // Error Status should be disabled at first
    Helper.testChildCount(sut, 'error-wrap', 0)
    // Submit button should be disabled at first
    Helper.testButtonIsDisabled(sut, 'submit', true)
    // Email and Password status should be with a normal message
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', validationError)
    Helper.testStatusForField(sut, 'password', validationError)
    Helper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
