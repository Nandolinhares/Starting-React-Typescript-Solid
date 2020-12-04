import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Components
import { Login } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
