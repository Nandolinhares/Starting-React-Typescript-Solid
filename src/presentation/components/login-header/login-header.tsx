import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
// Logo
import { Logo } from '@/presentation/components'

type Props = React.HTMLAttributes<HTMLElement>

const LoginHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquete programmers</h1>
    </header>
  )
}

export default memo(LoginHeader)
