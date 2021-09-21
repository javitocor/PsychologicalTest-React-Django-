import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Test from '../containers/Test';
import Results from './Results';
import style from '../style/App.module.css';

const App = () => (
  <Router>
    <Switch>
      <>
        <div className={style.content}>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/results" component={Results} />
        </div>
      </>
    </Switch>
  </Router>
);

export default App;