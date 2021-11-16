import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './pages/Login';

import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Todos from './pages/Todos';


const SecuredRoute = ({ component: Component, ...rest, isAuthenticated })
=> (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastre" component={SignIn} />
      <Route path="/home" component={Home} />
      <SecuredRoute isAuthenticated={this.state.isAuthenticated}
        path="/todos" component={Todos} />
      <Route render={() => <h1>Não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;