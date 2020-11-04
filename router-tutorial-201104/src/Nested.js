import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function Nested() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  console.log(match);

  return (
    <>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.url}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.url}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </>
  );
}

function Topic() {
  console.log(useParams());
  let { topicId } = useParams();
  return <h3>Requested topic Id: {topicId}</h3>;
}
