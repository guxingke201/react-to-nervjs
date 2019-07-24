import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
// import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Loadable from 'react-loadable'

const AsyncHello = Loadable({
  loader: () => import(`../components/Hello`),
  loading: () => <div>loading...</div>
})

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/hello"
        render={props => {
          return <AsyncHello />
        }}
      />
      <Route exact path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes