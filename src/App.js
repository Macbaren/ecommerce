import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from './components/Main/Main'
import Basket from './components/Basket/Basket'
import LoginForm from './login'
import store from '../src/redux'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Main />} />
            <Route exact path="/basket" component={() => <Basket />} />
            <Route exact path="/login" component={() => <LoginForm />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

App.propTypes = {}

export default App
