import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import Basket from './components/Basket/Basket'
import LoginForm from './login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/basket" component={() => <Basket />} />
          <Route exact path="/login" component={() => <LoginForm />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

App.propTypes = {}

export default App
