import { fieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements fieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return new RequiredFieldError()
  }
}