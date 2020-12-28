import { AccountModel } from '@/domain/models'

export type AuthenticationParams = {
  email: string
  password: string
}

// 12

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
