import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Main from './Main';
import Sub from './Sub';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: 'blue' }} to="/">
              메인화면으로 가기
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'blue' }} to="/sub">
              서브화면으로 가기
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/sub" component={Sub} />
          {/* <Route path="/users/:username" component={User} /> */}
          {/* <Route path="/users" component={Users} /> */}
          {/* 
            렌더로 하면 기존에 라우트가 컴포넌트에 내려준 props(location, match..) 안내려줌  
            {...props} 추가해줘야함. 
          */}
          <Route
            render={props => <Users {...props} something="something"></Users>}
          ></Route>
          <Route render={() => <div>404 NOT FOUND</div>}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
