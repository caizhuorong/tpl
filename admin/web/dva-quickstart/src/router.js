import React from 'react';
import { Router, Route, Switch ,Redirect } from 'dva/router';
import Home from './layout';
import Login from './routes/login/login.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
	      <Switch>
	          <Route path="/login" component={Login} />
	          <Route path="/home" component={Login}>
	          </Route>
	          <Route exact path="/" render={() => (<Redirect to="/home"/>)}></Route>
	      </Switch>
    </Router>
  );
}

export default RouterConfig;
