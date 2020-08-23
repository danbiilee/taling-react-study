import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>User List: </h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/danbi"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            danbi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/ash"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            ash
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Select a User!</div>} />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
