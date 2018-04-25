import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';

const Login = () => {
  const name = 'xiaotao';
  return (
    <div>
      <input value={name} />
    </div>  
  )
}
class App extends Component {

  render() {
    const loggedIn = false;
    const list = [11, 22, 33, 44, 55, 66, 77];
    return (
      <div className="">
        <h6>测试路由</h6>
        <Router>
          <Switch>
            <Route path="/" render={() => (
              loggedIn
              ? <Redirect to="/home" />
              : <Login />
            )} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;