import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import Basket from './components/Basket/Basket'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/basket" component={() => <Basket />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

App.propTypes = {}

export default App
